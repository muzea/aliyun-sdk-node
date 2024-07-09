export interface AssumeRoleWithSAMLResponse {
    /**
     * 请求ID。
     * @example `6894B13B-6D71-4EF5-88FA-F32781734A7F`
     */
    RequestId: string;
    /**
     * SAML断言中的部分信息。
     */
    SAMLAssertionInfo: {
        /**
         * SAML断言中`NameID`的格式。当前缀为`urn:oasis:names:tc:SAML:2.0:nameid-format:`时，前缀会被移除。例如：`persistent/transient`。
         * @example `persistent`
         */
        SubjectType: string;
        /**
         * SAML断言中`Subject - NameID`字段的值。
         * @example `alice@example.com`
         */
        Subject: string;
        /**
         * SAML断言中`Issuer`字段的值。
         * @example `http://example.com/adfs/services/trust`
         */
        Issuer: string;
        /**
         * SAML断言中`Subject - SubjectConfirmation - SubjectConfirmationData`字段中`Recipient`属性的值。
         * @example `https://signin.aliyun.com/saml-role/SSO`
         */
        Recipient: string;
    };
    /**
     * 角色扮演临时身份。
     */
    AssumedRoleUser: {
        /**
         * 临时身份的ID。
         * @example `34458433936495****:alice`
         */
        AssumedRoleId: string;
        /**
         * 临时身份的ARN。
         * @example `acs:sts::123456789012****:assumed-role/AdminRole/alice`
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
