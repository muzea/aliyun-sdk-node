export interface AppMessagePushRequest {
    /**
     * 实例ID
     * @example `ccc_xp_pre-cn-ss001`
     */
    "InstanceId": string;
    /**
     * 用户编号
     * @example `123`
     */
    "UserId": string;
    /**
     * APP状态 1: "在线",2: "离线"
     * @example `1`
     */
    "Status": number;
    /**
     * 过期时间
     * @example `123`
     */
    "ExpirationTime": number;
}
