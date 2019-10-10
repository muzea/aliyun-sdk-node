interface CreateQosCarRequest {
    "RegionId": string;
    "QosId": string;
    "Priority": number;
    "LimitType": string;
    "MinBandwidthAbs"?: number;
    "MaxBandwidthAbs"?: number;
    "MinBandwidthPercent"?: number;
    "MaxBandwidthPercent"?: number;
    "OwnerId"?: number;
    "Description"?: string;
    "PercentSourceType"?: string;
    "Name"?: string;
}
export { CreateQosCarRequest };