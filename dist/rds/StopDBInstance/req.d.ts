export interface StopDBInstanceRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1q915x50h****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
