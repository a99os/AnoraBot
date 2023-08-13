import { Body, Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { senSmsDto } from "./senSMS.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async sendMessage(
    @Body()
    data: senSmsDto
  ) {
    return this.appService.sendMessage(data);
  }
}
