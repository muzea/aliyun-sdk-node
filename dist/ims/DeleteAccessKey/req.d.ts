export interface DeleteAccessKeyRequest {
    /**
     * 需要删除的访问密钥ID。
     * @example `LTAI4GFTgcR8m8cZQDTH****`
     */
    "UserAccessKeyId": string;
    /**
     * RAM用户的登录名称。
     * 如果为空，默认删除当前用户的访问密钥。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
}
