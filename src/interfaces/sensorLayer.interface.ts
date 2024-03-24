interface SensorLayer<T> {
    createOrUpdateLayer(data: T): void;
}