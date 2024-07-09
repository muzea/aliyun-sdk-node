export interface DescribeDBProxyRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1ja4f56s7us****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `normal`
     */
    "DBProxyEngineType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
