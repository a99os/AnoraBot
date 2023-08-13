import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { InjectBot } from "nestjs-telegraf";
import { Context, Markup, Telegraf } from "telegraf";
import { MyBotName } from "./app.constants";
import { senSmsDto } from "./senSMS.dto";

@Injectable()
export class AppService {
  constructor(@InjectBot(MyBotName) private readonly bot: Telegraf<Context>) {}

  async sendMessage(data: senSmsDto) {
    try {
      await this.bot.telegram.sendChatAction(+process.env.CHANNEL_ID, "typing");
      return await this.bot.telegram.sendMessage(
        +process.env.CHANNEL_ID,
        `<b>${data.name} ${data.surname}</b>
<code>${data.phone_number}</code>
${data.description}
        `,
        {
          parse_mode: "HTML",
        }
      );
    } catch (error) {}
  }
}
