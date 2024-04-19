import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { SensorInstancesService } from 'src/sensors/sensor-instances.service';

@Injectable()
export class AppService {
  constructor(
    private readonly sensorInstancesService: SensorInstancesService
  ) { }

  private cronJobsMap: Map<any, CronJob> = new Map();

  @Cron('* * * * * *')
  async handleCron() {
    const instances = this.sensorInstancesService.getAllInstances();

    for (const instance of instances) {
      if ('syncData' in instance) {
        instance.syncData({});
      }

      if (instance.updatedConfigs && !this.cronJobsMap.has(instance)) {
        const job = new CronJob('*/5 * * * * *', instance.updatedConfigs.bind(instance));
        job.start();
        this.cronJobsMap.set(instance, job);
      }
    }
  }

  processSensor(sensor: string) {
    this.sensorInstancesService.getInstance(sensor).processData({});
    return `Processing sensor ${sensor}`;
  }

}
