import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { MyBotName } from './app.constants';


@Injectable()
export class AppService {
  constructor(
    @InjectBot(MyBotName) private readonly bot: Telegraf<Context>,
  ) {}
  
  async sendMessage(msg:string){
    await this.bot.telegram.sendChatAction(+process.env.CHANNEL_ID,"typing")
    return await this.bot.telegram.sendMessage(+process.env.CHANNEL_ID,msg)
  }
}
