export interface GetAccessKeyLastUsedRequest {
    /**
     * RAM用户的登录名称。
     * 如果为空，默认查询当前用户的访问密钥。
     * @example `test@example.onaliyun.com`
     */
    "UserPrincipalName"?: string;
    /**
     * 需要查询的访问密钥ID。
     * @example `LTAI4GFTgcR8m8cZQDTH****`
     */
    "UserAccessKeyId": string;
}
