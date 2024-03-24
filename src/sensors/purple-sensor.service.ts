import { Logger } from "@nestjs/common";

export class PurpleSensorService implements APISensorConsumer<any>{

    private readonly logger = new Logger(PurpleSensorService.name);

    constructor() {
        this.logger.log('🟪🟪🟪 PurpleSensorService initialized 🟪🟪🟪');
    }

    syncData(data: any): void {
        this.logger.log('🟪🟪 PurpleSensorService syncing data 🟪🟪');
    }
    processData(data: any): void {
        this.logger.log('🟪 Purple Sensor Processing Data 🟪');
    }
}