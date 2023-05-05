import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { MyBotName } from './app.constants';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppUpdate } from './app.updates';


@Module({
  imports: [
    TelegrafModule.forRootAsync({
      botName: MyBotName,
      useFactory: () => ({
        token: process.env.BOT_TOKEN,
        middlewares: [],
        include: [],
      }),
    }),
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
   
  ],

  controllers: [AppController],
  providers: [AppService, AppUpdate],
})
export class AppModule {}
