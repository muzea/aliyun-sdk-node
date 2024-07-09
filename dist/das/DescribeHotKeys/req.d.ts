export interface DescribeHotKeysRequest {
    /**
     * Redis实例ID，您可以调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp18ff4a195d****`
     */
    "InstanceId": string;
    /**
     * Redis实例的数据分片ID，您可以调用[DescribeRoleZoneInfo](~~190794~~)接口获取。
     * @example `r-x****-db-0`
     */
    "NodeId"?: string;
}
