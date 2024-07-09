export interface CreateRoomRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 模板ID。取值：
     * - **default**：默认。
     * 传空值，则默认为**default**。
     * @example `default`
     */
    "TemplateId"?: string;
    /**
     * 房间ID，最大长度36个字符，传空值，则随机生成一个房间ID。
     * @example `AE35-****-T95F`
     */
    "RoomId"?: string;
    /**
     * 房间标题，支持中英文和数字，最大长度32个字符。
     * @example `RoomTitle001`
     */
    "Title": string;
    /**
     * 房间公告，支持中英文和数字以及常用符号，最大长度256个字符。
     * @example `RoomNotice001`
     */
    "Notice"?: string;
    /**
     * 房主ID，仅支持英文和数字，最大长度36个字符。
     * @example `as****hs`
     */
    "RoomOwnerId": string;
    /**
     * 拓展字段，按需传递，需要额外记录的房间属性。所有字段键-值长度总和不超过2048字节。
     */
    "Extension"?: any;
}
