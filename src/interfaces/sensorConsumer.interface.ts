interface SensorConsumer<T> {
    processData(data: T): void;
}
