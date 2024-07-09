export interface ModifyPowerStationRequest {
    "IotInstanceId": string;
    "AlgorithmInstanceUid": string;
    "PowerStationUid": string;
    "PowerStationName"?: string;
    "Description"?: string;
    "RatedPower": number;
}
