export interface CreateClassRequest {
    /**
     * 用户的应用ID，在控制台创建应用时生成。包含小写字母、数字，长度为6个字符。
     * @example `7m***q`
     */
    "AppId": string;
    /**
     * 课程标题，支持中英文，最大长度32个字符。
     * @example `ClassTitle001`
     */
    "Title": string;
    /**
     * 创建人用户ID，仅支持英文和数字，最大长度36个字符。
     * @example `as****hs`
     */
    "CreateUserId": string;
    /**
     * 创建人用户昵称，支持中英文，最大长度32个字符。
     * @example `nickname001`
     */
    "CreateNickname": string;
}
