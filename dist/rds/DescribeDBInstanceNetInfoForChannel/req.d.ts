export interface DescribeDBInstanceNetInfoForChannelRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `0c593ea1-3bea-11e9-b96b-88****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp1k8s41l2o52****`
     */
    "DBInstanceId": string;
    /**
     * 内部参数，无需传入。
     * @example `无`
     */
    "Flag"?: string;
    /**
     * 查询的连接地址类型：
     * * **0**（默认）：常规连接地址。
     * * **1**：共享代理的读写分离地址。
     * @example `0`
     */
    "DBInstanceNetRWSplitType"?: string;
}
