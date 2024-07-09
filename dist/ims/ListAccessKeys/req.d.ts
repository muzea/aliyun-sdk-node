export interface ListAccessKeysRequest {
    /**
     * RAM用户的登录名称。
     * 如果为空，默认查询当前用户的所有访问密钥。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
}
