export interface GetParametersForImportResponse {
    /**
     * 主密钥全局唯一标识符。
     * 后续调用[ImportKeyMaterial](~~68622~~)时需要指定该参数。
     * @example `202b9877-5a25-46e3-a763-e20791b5****`
     */
    KeyId: string;
    /**
     * 导入令牌。
     * 令牌的有效期为24小时。后续调用[ImportKeyMaterial](~~68622~~)时需要指定该参数。
     * @example `Base64String`
     */
    ImportToken: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8cdf51fd-bcd6-d79a-0ef4-e52c9b5466dc`
     */
    RequestId: string;
    /**
     * 导入令牌的过期时间。
     * @example `2018-01-25T00:01:02Z`
     */
    TokenExpireTime: string;
    /**
     * 用于加密密钥材料的公钥。
     * 采用Base64编码。
     * @example `MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAlls4uIBxD0GG84C+lGBO6Dhpf1J3XimC6cPmPNaKKJMOzoX4tD+C+r7aZv8lZ3vnPfxuxvy/YwG+whUxTEEFUdqJTOIzhPfYucupqKM92crVHIuG+xtMVeHKjyTr+UrtKCsQikqHT+19yDRN/RMoo2HUx0gmEnRyXd8t3JyUXun9FdoxKA08GrsV7nodb9ZsoBLhnev7tTLcXvLyKW6XG1ZQCQm6dPnbnwLeDXR7uK0Lqn9PM28mBIdaiQUQxj2XbM1CoJA+JiyVX3Ptdb+4rqukb4Rb05B80Bs9xV/cf7FIku08l7xGhrGiQFq+DFXwQWtwihXHZxz3LhldU+4ZPwID****`
     */
    PublicKey: string;
}
