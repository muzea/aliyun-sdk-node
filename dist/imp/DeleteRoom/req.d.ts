export interface DeleteRoomRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间ID，由字母、数字、下划线（_）和小数点（.）组成，最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
}
