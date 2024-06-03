export class CloudLayerType {
    LAYER_NAME: string = "Unknown";
    LAYER_TYPE: string = "Unknown";
    LAYER_BASE_ALT: number = 0;
    LAYER_CEILING_ALT: number = 0;
    LAYER_COVERAGE: number = 0;
}

export class WindLayerType {
    LAYER_NAME: string = "Unknown";
    LAYER_BASE_ALT: number = 0;
    LAYER_CEILING_ALT: number = 0;
    LAYER_SPEED: number = 0;
    LAYER_DIRECTION: number = 0;
}

export class PrecipitationType {
    TYPE: string = "Unknown";
    INTENSITY: string = "Unknown";
}
