export interface UpdateLiveRequest {
    /**
     * 直播资源的唯一标识ID。
     * @example `b7f2****ebb3`
     */
    "LiveId": string;
    /**
     * 直播标题，支持中英文，最大长度256个字符。
     * @example `This is a title.`
     */
    "Title"?: string;
    /**
     * 直播简介，支持中英文，最大长度2048个字符。
     * @example `This is an introduction.`
     */
    "Introduction"?: string;
}
