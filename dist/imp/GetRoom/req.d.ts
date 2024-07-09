export interface GetRoomRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间ID，由字母、数字、小数点（.）和短横线（-）组成，最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
}
