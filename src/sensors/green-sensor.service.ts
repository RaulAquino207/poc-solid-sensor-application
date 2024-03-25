import { Logger } from "@nestjs/common";

export class GreenSensorService implements SensorConsumer<any>, SensorLayer<any> {

    private readonly logger = new Logger(GreenSensorService.name);

    constructor() {
        this.logger.log('🟩🟩🟩 GreenSensorService initialized 🟩🟩🟩');
    }

    processData(data: any): void {
        this.logger.log('🟩 Green Sensor Process Data 🟩');
        this.createOrUpdateLayer(data);
    }
    createOrUpdateLayer(data: any): void {
        this.logger.log('🗺️ processing 🟩 layer 🗺️');
    }
}