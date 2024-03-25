import { Logger } from "@nestjs/common";

export class BlueSensorService implements APISensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(BlueSensorService.name);

    constructor() {
        this.logger.log('🟦🟦🟦 BlueSensorService initialized 🟦🟦🟦');
    }

    lastSyncTime: number = 0;
    syncInterval: number = 15000; // 15 seconds

    syncData(data: any): void { 
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - this.lastSyncTime;

        if (elapsedTime >= this.syncInterval) {
            this.logger.log('🟦🟦 BlueSensorService syncing data 🟦🟦');
            this.logger.log(`🟦🟦 synchronization time: ${this.syncInterval} 🟦🟦`);
            this.processData(data);
            this.lastSyncTime = currentTime;
        }
    }
    processData(data: any): void {
        this.logger.log('🟦 Blue Sensor Processing Data 🟦');
        this.createOrUpdateLayer(data);
    }
    createOrUpdateLayer(data: any): void {
        this.logger.log('🗺️ processing 🟦 layer 🗺️');
    }
}