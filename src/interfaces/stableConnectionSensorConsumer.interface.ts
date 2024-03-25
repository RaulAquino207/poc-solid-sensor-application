interface StableConnectionSensorConsumer<T> extends SensorConsumer<T> {
    establishConnection(data: T): void;
}