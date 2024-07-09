export interface DetachAlbServerGroupsResponse {
    /**
     * 移出ALB服务器组，并移出该ALB服务器组内的ECS实例时，对应伸缩活动的ID。仅当`ForceDetach`取值为`true`时，返回该参数。
     * @example `asa-2ze6wxj8vsohn6j9****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
}
