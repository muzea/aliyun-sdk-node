export interface AttachAlbServerGroupsResponse {
    /**
     * 添加ALB服务器组并将伸缩组内的ECS实例或ECI实例添加到该ALB服务器组时，伸缩活动的ID。
     * >仅当`ForceAttach`取值为`true`时，返回该参数。
     * @example `asa-2ze6wxj8vsohn6j9****`
     */
    ScalingActivityId: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
