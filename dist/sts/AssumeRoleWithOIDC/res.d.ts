export interface AssumeRoleWithOIDCResponse {
    /**
     * 请求ID。
     * @example `3D57EAD2-8723-1F26-B69C-F8707D8B565D`
     */
    RequestId: string;
    /**
     * 解析的OIDC Token信息。
     */
    OIDCTokenInfo: {
        /**
         * OIDC主体。
         * 对应OIDC Token中的`sub`字段值。
         * @example `KryrkIdjylZb7agUgCEf****`
         */
        Subject: string;
        /**
         * OIDC颁发者URL。
         * 对应OIDC Token中的`iss`字段值。
         * @example `https://dev-xxxxxx.okta.com`
         */
        Issuer: string;
        /**
         * OIDC受众。多个之间用半角逗号（,）分隔。
         * 对应OIDC Token中的`aud`字段值。
         * @example `496271242565057****`
         */
        ClientIds: string;
        /**
         * OIDC Token的过期时间。
         * @example `2021-10-20T04:27:09Z`
         */
        ExpirationTime: string;
        /**
         * OIDC Token的签发时间。
         * @example `2021-10-20T03:27:09Z`
         */
        IssuanceTime: string;
        /**
         * OIDC Token的检验信息。更多信息，请参见[管理OIDC身份提供商](~~327123~~)。
         * @example `Success`
         */
        VerificationInfo: string;
    };
    /**
     * 角色扮演临时身份。
     */
    AssumedRoleUser: {
        /**
         * 临时身份的ID。
         * @example `33157794895460****`
         */
        AssumedRoleId: string;
        /**
         * 临时身份的ARN。
         * @example `acs:ram::113511544585****:role/testoidc/TestOidcAssumedRoleSession`
         */
        Arn: string;
    };
    /**
     * 临时访问凭证（STS Token）。
     */
    Credentials: {
        /**
         * 安全令牌。
         * > 安全令牌的长度不固定，我们强烈建议您不要对安全令牌的最大长度做任何限制。
         * @example `CAIShwJ1q6Ft5B2yfSjIr5bSEsj4g7BihPWGWHz****`
         */
        SecurityToken: string;
        /**
         * Token到期失效时间（UTC时间）。
         * @example `2021-10-20T04:27:09Z`
         */
        Expiration: string;
        /**
         * 访问密钥。
         * @example `CVwjCkNzTMupZ8NbTCxCBRq3K16jtcWFTJAyBEv2****`
         */
        AccessKeySecret: string;
        /**
         * 访问密钥ID。
         * @example `STS.NUgYrLnoC37mZZCNnAbez****`
         */
        AccessKeyId: string;
    };
}
