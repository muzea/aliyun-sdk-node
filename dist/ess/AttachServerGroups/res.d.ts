export interface AttachServerGroupsResponse {
    /**
     * 添加负载均衡服务器组并将伸缩组内的ECS实例或ECI实例添加到该服务器组时，伸缩活动的ID。
     * > 仅当ForceAttach取值为true时，返回该参数。
     * @example `asa-bp1c9djwrgxjyk31****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
