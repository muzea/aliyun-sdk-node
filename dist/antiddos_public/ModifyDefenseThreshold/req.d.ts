interface ModifyDefenseThresholdRequest {
    "RegionId"?: string;
    "DdosRegionId": string;
    "InstanceType": string;
    "InstanceId": string;
    "SourceIp"?: string;
    "Lang"?: string;
    "Bps"?: number;
    "Pps"?: number;
    "IsAuto"?: boolean;
}
export { ModifyDefenseThresholdRequest };