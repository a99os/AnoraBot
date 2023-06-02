import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { InjectBot } from "nestjs-telegraf";
import { Context, Markup, Telegraf } from "telegraf";
import { MyBotName } from "./app.constants";

@Injectable()
export class AppService {
  constructor(@InjectBot(MyBotName) private readonly bot: Telegraf<Context>) {}

  async sendMessage(data: {
    name: string;
    surname: string;
    phone_number: string;
  }) {
    try {
      await this.bot.telegram.sendChatAction(+process.env.CHANNEL_ID, "typing");
      return await this.bot.telegram.sendMessage(
        +process.env.CHANNEL_ID,
        `
        name: ${data.name}
        surname: ${data.surname}
        phone_number: ${data.phone_number}
        `
      );
    } catch (error) {}
  }
}
