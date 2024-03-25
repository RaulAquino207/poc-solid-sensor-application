import { Logger } from "@nestjs/common";

export class PurpleSensorService implements APISensorConsumer<any>{

    private readonly logger = new Logger(PurpleSensorService.name);

    constructor() {
        this.logger.log('🟪🟪🟪 PurpleSensorService initialized 🟪🟪🟪');
    }

    lastSyncTime: number = 0;
    syncInterval: number = 30000; // 30 seconds

    syncData(data: any): void {
        const currentTime = new Date().getTime();
        const elapsedTime = currentTime - this.lastSyncTime;

        if (elapsedTime >= this.syncInterval) {
            this.logger.log('🟪🟪 PurpleSensorService syncing data 🟪🟪');
            this.logger.log(`🟪🟪 synchronization time: ${this.syncInterval} 🟪🟪`);
            this.processData(data);
            this.lastSyncTime = currentTime;
        }
    }
    processData(data: any): void {
        this.logger.log('🟪 Purple Sensor Processing Data 🟪');
    }
}