export interface DescribeSpotDiscountHistoryRequest {
    /**
     * 实例规格。
     * @example `ecs.c6.4xlarge`
     */
    "InstanceType"?: string;
    /**
     * 是否有保护期。如果有保护期，在抢占式实例创建1小时内，实例不会被抢占。
     * @example `false`
     */
    "IsProtect"?: boolean;
}
