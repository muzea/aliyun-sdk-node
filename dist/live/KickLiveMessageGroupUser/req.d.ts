export interface KickLiveMessageGroupUserRequest {
    /**
     * 需要踢人的直播互动应用ID。
     * @example `coims-****`
     */
    "AppId": string;
    /**
     * 需要处理的群组的GroupID。
     * @example `grouptest`
     */
    "GroupId": string;
    /**
     * 需要踢出去的用户。
     * @example `uid1`
     */
    "KickoffUser": string;
    /**
     * 数据中心，需要与[CreateLiveMessageApp](~~2593195~~)中的数据中心一致，当前固定取值cn-shanghai。
     * @example `cn-shanghai`
     */
    "DataCenter"?: string;
}
