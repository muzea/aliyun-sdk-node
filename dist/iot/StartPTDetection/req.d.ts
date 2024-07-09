export interface StartPTDetectionRequest {
    "IotInstanceId": string;
    "PowerStationUid"?: string;
    "FileName": string;
    "PowerPlantsNumber"?: number;
    "Data": string;
    "DataCollectionTime": number;
    "AlgorithmInstanceUid": string;
    "Sensitivity"?: number;
}
