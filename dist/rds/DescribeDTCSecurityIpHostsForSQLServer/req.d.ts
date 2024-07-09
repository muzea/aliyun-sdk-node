export interface DescribeDTCSecurityIpHostsForSQLServerRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeDBInstanceAttribute获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
