export interface CreateAccessKeyRequest {
    /**
     * RAM用户的登录名称。
     * 如果为空，默认为当前用户创建访问密钥。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
}
