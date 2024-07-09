export interface ListPowerStationRequest {
    "IotInstanceId": string;
    "AlgorithmInstanceUid": string;
    "PowerStationName"?: string;
    "PageNo": number;
    "PageSize": number;
}
