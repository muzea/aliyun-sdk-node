export interface CreateLiveRequest {
    /**
     * 应用唯一标识，可以包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 房间唯一标识，最大长度36个字符。
     * @example `AE35-****-T95F`
     */
    "RoomId": string;
    /**
     * 创建直播用户，在AppId下单独唯一。小写英文、数字、下划线（_）和小数点（.）组成，最大长度32个字符。
     * @example `as****hs`
     */
    "UserId": string;
    /**
     * 直播资源的唯一标识ID，传空值时，系统自动生成36位随机UUID字符串。
     * @example `b7f2****ebb3`
     */
    "LiveId"?: string;
    /**
     * 直播标题，支持中英文，最大长度256个字符。
     * @example `This is a title.`
     */
    "Title"?: string;
    /**
     * 直播简介，支持中英文，最大长度2048个字符。
     * @example `This is an intro.`
     */
    "Introduction"?: string;
    /**
     * 主播ID，支持中英文，最大长度128个字符。传空值时，主播为当前创建直播用户。
     * @example `as****hs`
     */
    "AnchorId"?: string;
    /**
     * 直播推流码率，缺省时默认为3。取值：
     * * **-1**：流畅lld。
     * * **1**：标清lsd。
     * * **2**：高清lhd。
     * * **3**：超清lud。
     * @example `3`
     */
    "CodeLevel"?: number;
}
