export interface UpdateUserRequest {
    /**
     * RAM用户名称。
     * @example `zhangq****`
     */
    "UserName"?: string;
    /**
     * RAM用户的新名称。
     * 长度为1~64个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。
     * @example `xiaoq****`
     */
    "NewUserName"?: string;
    /**
     * RAM用户的新显示名称。
     * 长度为1~128个字符。
     * @example `xiaoq****`
     */
    "NewDisplayName"?: string;
    /**
     * RAM用户的新手机号码。
     * 格式：国际区号-号码。
     * > 该参数仅适用于中国站。
     * @example `86-1860000****`
     */
    "NewMobilePhone"?: string;
    /**
     * RAM用户的新电子邮箱。
     * > 该参数仅适用于中国站。
     * @example `xiaoq****@example.com`
     */
    "NewEmail"?: string;
    /**
     * 新备注。
     * 长度为1~128个字符。
     * @example `This is a cloud computing engineer.`
     */
    "NewComments"?: string;
}
