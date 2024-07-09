export interface PublishLiveRequest {
    /**
     * 直播资源的唯一标识ID。
     * @example `b7f2****ebb3`
     */
    "LiveId": string;
    /**
     * 用户UserId，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。
     * @example `as****hs`
     */
    "UserId": string;
}
