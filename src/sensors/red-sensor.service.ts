import { Logger } from "@nestjs/common";

export class RedSensorService implements APISensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(RedSensorService.name);

    constructor() {
        this.logger.log('🟥🟥🟥 RedSensorService initialized 🟥🟥🟥');
    }

    lastSyncTime: number = 0;
    syncInterval: number = 60000; // 60 seconds
    
    syncData(data: any): void {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - this.lastSyncTime;

        if (elapsedTime >= this.syncInterval) {
            this.logger.log('🟥🟥 RedSensorService syncing data 🟥🟥');
            this.logger.log(`🟥🟥 synchronization time: ${this.syncInterval} 🟥🟥`);
            this.processData(data);
            this.lastSyncTime = currentTime;
        }
    }
    processData(data: any): void {
        this.logger.log('🟥 Red Sensor Processing Data 🟥');
        this.createOrUpdateLayer(data);
    }
    createOrUpdateLayer(data: any): void {
        this.logger.log('🗺️ processing 🟥 layer 🗺️');
    }
}