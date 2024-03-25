interface APISensorConsumer<T> extends SensorConsumer<T> {
    lastSyncTime: number;
    readonly syncInterval: number;
    syncData(data: T): void;
}