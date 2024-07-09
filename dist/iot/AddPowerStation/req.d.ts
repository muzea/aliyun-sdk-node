export interface AddPowerStationRequest {
    "IotInstanceId": string;
    "AlgorithmInstanceUid": string;
    "PowerStationName": string;
    "Description"?: string;
    "RatedPower": number;
}
