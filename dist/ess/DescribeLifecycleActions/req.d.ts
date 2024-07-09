export interface DescribeLifecycleActionsRequest {
    /**
     * 伸缩活动的ID。
     * @example `asa-bp17mug9t0pegagw****`
     */
    "ScalingActivityId": string;
    /**
     * 生命周期操作的状态。取值范围：
     * - Pending：挂起中。表示ECS实例仍处于挂起中状态。
     * - Timeout：已超时。表示已到达生命周期挂钩的超时时间，自动结束ECS实例的挂起中状态。
     * - Completed：已处理。表示您手动提前结束了ECS实例的挂起中状态。
     * @example `Pending`
     */
    "LifecycleActionStatus"?: string;
    /**
     * 查询凭证，用于指定开始查询的位置。
     * 例如上次查询10条生命周期操作后，本次从第11条生命周期操作开始查询。取值为上次调用本接口返回的NextToken参数值，如果不填写取值则表示从头开始查询。
     * @example `AAAAAcSz4VTb1Nq****`
     */
    "NextToken"?: string;
    /**
     * 设置单页查询的最大条目数。取值范围：1~50。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
