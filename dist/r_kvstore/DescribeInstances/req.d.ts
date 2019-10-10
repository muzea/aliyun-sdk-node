interface DescribeInstancesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "InstanceIds"?: string;
    "InstanceStatus"?: string;
    "ChargeType"?: string;
    "NetworkType"?: string;
    "EngineVersion"?: string;
    "InstanceClass"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
    "InstanceType"?: string;
    "SearchKey"?: string;
    "ArchitectureType"?: string;
    "Expired"?: string;
    "ZoneId"?: string;
    "Tag"?: string[];
    "VpcCloudInsInfo"?: number;
}
export { DescribeInstancesRequest };