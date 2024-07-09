export interface DetachServerGroupsResponse {
    /**
     * 移出负载均衡服务器组，并移出该服务器组内的ECS实例或ECI实例时，伸缩活动的ID。
     * > 仅当`ForceDetach`取值为`true`时，返回该参数。
     * @example `asa-bp1gbswjhjrw8tko****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `6EF9BFEE-FE07-4627-B8FB-14326FB9****`
     */
    RequestId: string;
}
