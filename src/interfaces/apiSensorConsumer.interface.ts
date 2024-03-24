interface APISensorConsumer<T> extends SensorConsumer<T> {
    syncData(data: T): void;
}