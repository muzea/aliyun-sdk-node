export interface CreateUserRequest {
    /**
     * RAM用户的名称。
     * 长度为1~64个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。
     * @example `alice`
     */
    "UserName"?: string;
    /**
     * RAM用户的显示名称。
     * 长度为1~128个字符。
     * @example `alice`
     */
    "DisplayName"?: string;
    /**
     * RAM用户的手机号码。
     * 格式：国际区号-号码。
     * > 该参数仅适用于中国站。
     * @example `86-1868888****`
     */
    "MobilePhone"?: string;
    /**
     * RAM用户的电子邮箱。
     * > 该参数仅适用于中国站。
     * @example `alice@example.com`
     */
    "Email"?: string;
    /**
     * 备注。
     * 长度为1~128个字符。
     * @example `This is a cloud computing engineer.`
     */
    "Comments"?: string;
}
