export interface DescribeAuditLogConfigRequest {
    /**
     * 实例所属地域的ID，您可以调用[DescribeInstanceAttribute](~~60996~~)接口查询。
     * @example `cn-hanghzou`
     */
    "RegionId": string;
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
}
