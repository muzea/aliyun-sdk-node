export interface StopLiveRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间ID，支持英文和数字，最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
    /**
     * 创建直播的UserId，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 直播资源的唯一标识ID。
     * @example `b7f2****ebb3`
     */
    "LiveId": string;
}
