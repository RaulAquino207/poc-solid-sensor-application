import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':sensor')
  processSensor(@Param('sensor') sensor: string): string {
    return this.appService.processSensor(sensor);
  }
}
