export interface GetUserRequest {
    /**
     * RAM用户的名称。
     * 长度为1~64个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。
     * @example `alice`
     */
    "UserName"?: string;
}
