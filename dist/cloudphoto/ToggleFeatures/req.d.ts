interface ToggleFeaturesRequest {
    "RegionId": string;
    "StoreName": string;
    "EnabledFeatures"?: string[];
    "DisabledFeatures"?: string[];
}
export { ToggleFeaturesRequest };