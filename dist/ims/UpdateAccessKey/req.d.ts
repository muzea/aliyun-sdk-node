export interface UpdateAccessKeyRequest {
    /**
     * RAM用户的登录名称。
     * 如果为空，默认修改当前用户的访问密钥。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
    /**
     * 需要修改状态的访问密钥ID。
     * @example `LTAI4GFTgcR8m8cZQDTH****`
     */
    "UserAccessKeyId": string;
    /**
     * 访问密钥的状态。取值：
     * - Active：已激活。
     * - Inactive：已禁用。
     * @example `Active`
     */
    "Status": string;
}
