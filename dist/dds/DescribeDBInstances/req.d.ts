interface DescribeDBInstancesRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "PageNumber"?: number;
    "PageSize"?: number;
    "DBInstanceId"?: string;
    "ReplicationFactor"?: string;
    "DBInstanceDescription"?: string;
    "ExpireTime"?: string;
    "DBInstanceStatus"?: string;
    "DBInstanceType"?: string;
    "DBInstanceClass"?: string;
    "Engine"?: string;
    "EngineVersion"?: string;
    "NetworkType"?: string;
    "VpcId"?: string;
    "VSwitchId"?: string;
    "ChargeType"?: string;
    "ZoneId"?: string;
    "Expired"?: string;
    "Tag"?: string[];
}
export { DescribeDBInstancesRequest };