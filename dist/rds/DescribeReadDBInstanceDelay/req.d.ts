export interface DescribeReadDBInstanceDelayRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 只读实例ID。可调用DescribeDBInstances获取。
     * @example `rr-bp****`
     */
    "ReadInstanceId": string;
}
