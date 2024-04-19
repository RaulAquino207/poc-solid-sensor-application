import { Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

export class BlueSensorService implements APISensorConsumer<any>, SensorLayer<any>{

    private readonly logger = new Logger(BlueSensorService.name);

    constructor() {
        this.logger.log('🟦🟦🟦 BlueSensorService initialized 🟦🟦🟦');
    }

    lastSyncTime: number = 0;
    syncInterval: number = 15000; // 15 seconds
    configurationVariable: number = 0;

    async updatedConfigs() {
        this.configurationVariable += 1;
        this.logger.log(`⚙️ The sensor 🟦 configuration has been updated ⚙️ ${this.configurationVariable}`);
    }

    syncData(data: any): void { 
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - this.lastSyncTime;

        if (elapsedTime >= this.syncInterval) {
            this.logger.log(`🟦🟦 BlueSensorService syncing data 🟦🟦 with the configuration ⚙️ ${this.configurationVariable} ⚙️`);
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