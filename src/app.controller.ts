import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(
    @Body() data: { name: string; surname: string; phone_number: string }
  ) {
    return this.appService.sendMessage(data);
  }
}
