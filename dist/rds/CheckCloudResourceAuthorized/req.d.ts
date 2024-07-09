export interface CheckCloudResourceAuthorizedRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-t4n****`
     */
    "DBInstanceId"?: string;
    /**
     * 目标地域ID。可调用DescribeRegions获取。
     * @example `us-east-1`
     */
    "TargetRegionId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
