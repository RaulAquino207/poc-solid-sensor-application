import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { SensorInstancesService } from 'src/sensors/sensor-instances.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root.pocroot@localhost:27017/poc?authSource=admin&readPreference=primary&directConnection=true&ssl=false'),
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, SensorInstancesService],
})
export class AppModule {}
