export interface CancelUserAdminRequest {
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
     * 被取消管理员的用户ID。
     * @example `er****h`
     */
    "UserId": string;
}
