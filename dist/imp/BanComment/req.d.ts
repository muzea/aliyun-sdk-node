export interface BanCommentRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间的唯一标识，在调用CreateRoom时返回。
     * @example `AE35****T95F`
     */
    "RoomId": string;
    /**
     * 操作人的用户ID，用于表示谁执行了禁言操作。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 被禁言的用户ID。
     * @example `er****h`
     */
    "BanCommentUser": string;
    /**
     * 禁言时长，单位：秒。
     * - 如果不填写该字段，默认禁言30秒。
     * - 传0表示永久禁言。
     * - 最大值不得超过24小时，如果超过，会被限制为24小时。
     * @example `30`
     */
    "BanCommentTime"?: number;
}
