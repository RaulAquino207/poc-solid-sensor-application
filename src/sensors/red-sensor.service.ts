import { Logger } from "@nestjs/common";

export class RedSensorService implements StableConnectionSensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(RedSensorService.name);

    constructor() {
        this.logger.log('🟥🟥🟥 RedSensorService initialized 🟥🟥🟥');
        this.establishConnection({});
    }
    establishConnection(data: any): void {
        this.logger.log('🟥🟥 RedSensorService Establishing Connection 🟥🟥');
        this.processData(data);
    }

    processData(data: any): void {
        this.logger.log('🟥 Red Sensor Processing Data 🟥');
        this.createOrUpdateLayer(data);
    }
    createOrUpdateLayer(data: any): void {
        this.logger.log('🗺️ processing 🟥 layer 🗺️');
    }
}