import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { SensorInstancesService } from 'src/sensors/sensor-instances.service';

@Injectable()
export class AppService {
  constructor(
    private readonly sensorInstancesService: SensorInstancesService
  ) { }

  @Cron('* * * * * *')
  async handleCron() {
    const instances = this.sensorInstancesService.getAllInstances();

    for (const instance of instances) {
      if ('syncData' in instance) {
        instance.syncData({});
      }
    }
  }

  processSensor(sensor: string) {
    this.sensorInstancesService.getInstance(sensor).processData({});
    return `Processing sensor ${sensor}`;
  }

}
