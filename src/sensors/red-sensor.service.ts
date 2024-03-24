import { Logger } from "@nestjs/common";

export class RedSensorService implements APISensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(RedSensorService.name);

    constructor() {
        this.logger.log('🟥🟥🟥 RedSensorService initialized 🟥🟥🟥');
    }
    
    syncData(data: any): void {
        this.logger.log('🟥🟥 RedSensorService syncing data 🟥🟥');
    }
    processData(data: any): void {
        this.logger.log('🟥 Red Sensor Processing Data 🟥');
    }
    createOrUpdateLayer(data: any): void {
        throw new Error("createOrUpdateLayer");
    }
}