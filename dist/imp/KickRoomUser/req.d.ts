export interface KickRoomUserRequest {
    /**
     * 应用唯一标识，由6位小写字母、数字组成。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间的唯一标识，在调用CreateRoom时返回。
     * @example `AE35****T95F`
     */
    "RoomId": string;
    /**
     * 操作人的用户ID，用于表示谁执行了踢人操作。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 被踢出房间的用户ID。
     * @example `er****h`
     */
    "KickUser": string;
    /**
     * 踢出房间时长，有效时间内不能再次进入房间，单位：秒。
     * - 如果不填写该字段，默认踢出300秒。
     * - 传0表示永久踢出房间。
     * @example `300`
     */
    "BlockTime"?: number;
}
