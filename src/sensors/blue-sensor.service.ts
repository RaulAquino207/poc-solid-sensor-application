import { Logger } from "@nestjs/common";

export class BlueSensorService implements APISensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(BlueSensorService.name);

    constructor() {
        this.logger.log('🟦🟦🟦 BlueSensorService initialized 🟦🟦🟦');
    }

    syncData(data: any): void {
        this.logger.log('🟦🟦 BlueSensorService syncing data 🟦🟦');
    }
    processData(data: any): void {
        this.logger.log('🟦 Blue Sensor Processing Data 🟦');
    }
    createOrUpdateLayer(data: any): void {
        throw new Error("createOrUpdateLayer");
    }
}