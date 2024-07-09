export interface AssumeRoleWithSAMLRequest {
    /**
     * RAM中创建的SAML身份提供商的ARN。
     * 格式：`acs:ram::<account_id>:saml-provider/<saml_provider_id>`。
     * 您可以通过RAM控制台或API查看身份提供商的ARN。具体如下：
     * - RAM控制台：请参见[查看SAML身份提供商基本信息](~~116795~~)。
     * - API：请参见[GetSAMLProvider](~~186833~~)或[ListSAMLProviders](~~186851~~)。
     * @example `acs:ram::123456789012****:saml-provider/company1`
     */
    "SAMLProviderArn"?: string;
    /**
     * 要扮演的RAM角色的ARN。
     * 该角色是可信实体为SAML身份提供商的RAM角色。更多信息，请参见[创建可信实体为身份提供商的RAM角色](~~116805~~)或[CreateRole](~~28710~~)。
     * 格式：`acs:ram::<account_id>:role/<role_name>`。
     * 您可以通过RAM控制台或API查看角色ARN。具体如下：
     * - RAM控制台：请参见[如何查看RAM角色的ARN？](~~39744~~)。
     * - API：请参见[ListRoles](~~28713~~)或[GetRole](~~28711~~)。
     * @example `acs:ram::123456789012****:role/adminrole`
     */
    "RoleArn"?: string;
    /**
     * Base64编码后的SAML断言。
     * 长度为4~100000个字符。
     * > 需要从IdP获取完整的SAML响应，不能是单独的SAML断言字段。
     * @example `base64_encoded_saml_assertion`
     */
    "SAMLAssertion"?: string;
    /**
     * 为STS Token额外添加的一个权限策略，进一步限制STS Token的权限。具体如下：
     * - 如果指定该权限策略，则STS Token最终的权限取RAM角色权限策略与该权限策略的交集。
     * - 如果不指定该权限策略，则STS Token最终的权限就是RAM角色的权限。
     * 长度为1~2048个字符。
     * @example `url_encoded_policy`
     */
    "Policy"?: string;
    /**
     * Token有效期。单位：秒。
     * Token有效期最小值为900秒，最大值为`MaxSessionDuration`设置的时间，默认值为3600秒。
     * 您可以通过CreateRole或UpdateRole接口设置角色最大会话时间`MaxSessionDuration`。更多信息，请参见[CreateRole](~~28710~~)或[UpdateRole](~~28712~~)。
     * @example `3600`
     */
    "DurationSeconds"?: number;
}
