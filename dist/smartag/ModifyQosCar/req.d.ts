interface ModifyQosCarRequest {
    "RegionId": string;
    "QosId": string;
    "QosCarId": string;
    "OwnerId"?: number;
    "Description"?: string;
    "Priority"?: number;
    "LimitType"?: string;
    "MinBandwidthAbs"?: number;
    "MaxBandwidthAbs"?: number;
    "MinBandwidthPercent"?: number;
    "MaxBandwidthPercent"?: number;
    "PercentSourceType"?: string;
    "Name"?: string;
}
export { ModifyQosCarRequest };