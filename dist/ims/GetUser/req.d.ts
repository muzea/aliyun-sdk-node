export interface GetUserRequest {
    /**
     * RAM用户的登录名称。
     * 格式为`<username>@<AccountAlias>.onaliyun.com`，其中`<username>`为RAM用户名称，`<AccountAlias>.onaliyun.com`为默认域名。
     * `UserPrincipalName`长度为`1~128`个字符，可包含英文字母、数字、半角句号（.）、短划线（-）和下划线（_）。其中`<username>`的长度为`1~64`个字符。
     * >必须指定 `UserPrincipalName`、`UserId`和`UserAccessKeyId`三个参数中的一个参数，但不能同时指定。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
    /**
     * RAM用户ID。
     * >必须指定 `UserPrincipalName`、`UserId`和`UserAccessKeyId`三个参数中的一个参数，但不能同时指定。
     * @example `20732900249392****`
     */
    "UserId"?: string;
    /**
     * RAM用户的访问密钥ID。
     * >必须指定 `UserPrincipalName`、`UserId`和`UserAccessKeyId`三个参数中的一个参数，但不能同时指定。
     * @example `LTAI4GFTgcR8m8cZQDTH****`
     */
    "UserAccessKeyId"?: string;
}
