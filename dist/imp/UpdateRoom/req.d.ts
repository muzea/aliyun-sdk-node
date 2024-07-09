export interface UpdateRoomRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间ID，可以包含英文字母、数字、下划线（_）和小数点（.），最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
    /**
     * 房间标题，支持中英文，最大长度32个字符。
     * @example `RoomTitle001`
     */
    "Title"?: string;
    /**
     * 房间公告，支持中英文，最大长度256个字符。
     * @example `RoomNotice001`
     */
    "Notice"?: string;
    /**
     * 房主ID，仅支持英文和数字，最大长度36个字符。
     * @example `as****hs`
     */
    "RoomOwnerId"?: string;
    /**
     * 拓展字段，按需传递，需要额外记录的房间属性。
     */
    "Extension"?: any;
}
