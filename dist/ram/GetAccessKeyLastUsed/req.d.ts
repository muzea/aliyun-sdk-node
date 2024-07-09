export interface GetAccessKeyLastUsedRequest {
    /**
     * RAM用户名称。
     * @example `test`
     */
    "UserName"?: string;
    /**
     * 需要查询的访问密钥ID。
     * @example `LTAI4GFTgcR8m8cZQDTH****`
     */
    "UserAccessKeyId"?: string;
}
