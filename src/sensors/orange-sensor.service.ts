import { Logger } from "@nestjs/common";

export class OrangeSensorService implements StableConnectionSensorConsumer<any>{

    private readonly logger = new Logger(OrangeSensorService.name);

    constructor() {
        this.logger.log('🟧🟧🟧 OrangeSensorService initialized 🟧🟧🟧');
        this.establishConnection({});
    }

    establishConnection(data: any): void {
        this.logger.log('🟧🟧 OrangeSensorService Establishing Connection 🟧🟧');
        this.processData(data);
    }

    lastSyncTime: number = 0;
    syncInterval: number = 30000; // 30 seconds

    processData(data: any): void {
        this.logger.log('🟧 Orange Sensor Processing Data 🟧');
    }
}