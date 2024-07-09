export interface CreateUserRequest {
    /**
     * RAM用户的登录名称。
     * 格式为`<username>@<AccountAlias>.onaliyun.com`，其中`<username>`为RAM用户名称，`<AccountAlias>.onaliyun.com`为默认域名。 关于如何获取默认域名，请参见[GetDefaultDomain](~~186720~~)。
     * `UserPrincipalName`总长度为`1~128`个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。其中`<username>`的长度为`1~64`个字符。
     * @example `Test@example.onaliyun.com`
     */
    "UserPrincipalName": string;
    /**
     * RAM用户的显示名称。
     * 长度为1~24个字符。
     * @example `test`
     */
    "DisplayName": string;
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
    /**
     * 标签列表。最多包含20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * N的取值范围：1~20。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `operator`
         */
        Key: string;
        /**
         * 标签值。
         * N的取值范围：1~20。可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `alice`
         */
        Value: string;
    }[];
}
