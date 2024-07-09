export interface DescribeInstanceRequest {
    /**
     * 实例 ID。
     * @example `155****11`
     */
    "InstanceId": string;
    /**
     * 订单类型，已废弃。
     * @example `NEW`
     */
    "OrderType"?: string;
}
