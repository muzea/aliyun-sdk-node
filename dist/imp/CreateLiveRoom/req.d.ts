export interface CreateLiveRoomRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 直播标题，支持中英文，最大长度32位。
     * @example `Title001`
     */
    "Title": string;
    /**
     * 直播公告，支持中英文，最大长度256位。
     * @example `Notice001`
     */
    "Notice"?: string;
    /**
     * 直播封面，支持图片地址链接格式，最大长度256位。
     * @example `http://***.png`
     */
    "CoverUrl"?: string;
    /**
     * 拓展字段，按需传递，需要额外记录的直播属性。最大长度4096位。
     * @example `AE35****T95F`
     */
    "Extension"?: any;
    /**
     * 主播ID，仅支持英文和数字，最大长度36位。
     * @example `as****hs`
     */
    "AnchorId": string;
    /**
     * 主播昵称，支持中英文，最大长度32位。
     * @example `User001`
     */
    "AnchorNick"?: string;
    /**
     * 操作人ID，仅支持英文和数字，最大长度36位。
     * @example `as****hs`
     */
    "UserId"?: string;
    /**
     * 是否开启连麦功能，默认为false。
     * @example `false`
     */
    "EnableLinkMic"?: boolean;
}
