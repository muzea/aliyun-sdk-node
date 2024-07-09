export interface DescribeDBInstancesAsCsvRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****	`
     */
    "DBInstanceId"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
    /**
     * 废弃参数，无需配置。
     * @example `API`
     */
    "CachedAsync"?: boolean;
    /**
     * 废弃参数，无需配置。
     * @example `API`
     */
    "ExportKey"?: string;
}
