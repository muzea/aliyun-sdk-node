export interface AssumeRoleResponse {
    /**
     * 请求ID。
     * @example `6894B13B-6D71-4EF5-88FA-F32781734A7F`
     */
    RequestId: string;
    /**
     * 角色扮演时的临时身份。
     */
    AssumedRoleUser: {
        /**
         * 临时身份的ID。
         * @example `34458433936495****:alice`
         */
        AssumedRoleId: string;
        /**
         * 临时身份的ARN。
         * @example `acs:ram::123456789012****:role/adminrole/alice`
         */
        Arn: string;
    };
    /**
     * 访问凭证。
     */
    Credentials: {
        /**
         * 安全令牌。
         * > 安全令牌的长度不固定，我们强烈建议您不要对安全令牌的最大长度做任何限制。
         * @example `********`
         */
        SecurityToken: string;
        /**
         * Token到期失效时间（UTC时间）。
         * @example `2015-04-09T11:52:19Z`
         */
        Expiration: string;
        /**
         * 访问密钥。
         * @example `wyLTSmsyPGP1ohvvw8xYgB29dlGI8KMiH2pK****`
         */
        AccessKeySecret: string;
        /**
         * 访问密钥ID。
         * @example `STS.L4aBSCSJVMuKg5U1****`
         */
        AccessKeyId: string;
    };
}
