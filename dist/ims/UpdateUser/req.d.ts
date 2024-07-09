export interface UpdateUserRequest {
    /**
     * 指定的RAM用户登录名称。
     * > `UserPrincipalName`与`UserId`参数，必须指定一个，但不能同时指定。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
    /**
     * 指定的RAM用户ID。
     * > `UserPrincipalName`与`UserId`参数，必须指定一个，但不能同时指定。
     * @example `20732900249392****`
     */
    "UserId"?: string;
    /**
     * RAM用户的新登录名称。
     * 格式为`<username>@<AccountAlias>.onaliyun.com`，其中`<username>`为RAM用户名称，`<AccountAlias>.onaliyun.com`为默认域名。
     * `UserPrincipalName`长度为`1~128`个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。其中`<username>`的长度为`1~64`个字符。
     * @example `new@example.onaliyun.com`
     */
    "NewUserPrincipalName"?: string;
    /**
     * RAM用户的新显示名称。
     * 长度为1~24个字符。
     * @example `new`
     */
    "NewDisplayName"?: string;
    /**
     * RAM用户的新手机号码。
     * 格式：国际区号-号码。
     * > 该参数仅适用于中国站。
     * @example `86-1868888****`
     */
    "NewMobilePhone"?: string;
    /**
     * RAM用户的新电子邮箱。
     * > 该参数仅适用于中国站。
     * @example `alice@example.com`
     */
    "NewEmail"?: string;
    /**
     * 新备注。
     * 长度为1~128个字符。
     * @example `This is a cloud computing engineer.`
     */
    "NewComments"?: string;
}
