import { Injectable, Logger } from "@nestjs/common";
import { BlueSensorService } from "src/sensors/blue-sensor.service";
import { GreenSensorService } from "src/sensors/green-sensor.service";
import { PurpleSensorService } from "src/sensors/purple-sensor.service";
import { RedSensorService } from "src/sensors/red-sensor.service";


@Injectable()
export class SensorInstancesService {
    private readonly instances: Map<string, any> = new Map();
    private readonly logger = new Logger(SensorInstancesService.name);

    constructor() {
        this.logger.log('📚 SensorInstancesService setting sensors 📚');
        this.instances.set('GreenSensorService', new GreenSensorService());
        this.instances.set('BlueSensorService', new BlueSensorService());
        this.instances.set('RedSensorService', new RedSensorService());
        this.instances.set('PurpleSensorService', new PurpleSensorService());
    }

    getInstance(key: string): any {
        return this.instances.get(key);
    }

    getAllInstances(): IterableIterator<any> {
        return this.instances.values();
    }
}