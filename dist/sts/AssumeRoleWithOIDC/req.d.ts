export interface AssumeRoleWithOIDCRequest {
    /**
     * OIDC身份提供商的ARN。
     * 您可以通过RAM控制台或API查看OIDC身份提供商的ARN。具体如下：
     * - RAM控制台：请参见[查看OIDC身份提供商信息](~~327123~~)。
     * - API：请参见[GetOIDCProvider](~~327126~~)或[ListOIDCProviders](~~327127~~) 。
     * @example `acs:ram::113511544585****:oidc-provider/TestOidcIdp`
     */
    "OIDCProviderArn"?: string;
    /**
     * 需要扮演的RAM角色ARN。
     * 您可以通过RAM控制台或API查看角色ARN。具体如下：
     * - RAM控制台：请参见[如何查看RAM角色的ARN](~~39744~~)。
     * - API：请参见[ListRoles](~~28713~~)或[GetRole](~~28711~~) 。
     * @example `acs:ram::113511544585****:role/testoidc`
     */
    "RoleArn"?: string;
    /**
     * 由外部IdP签发的OIDC令牌（OIDC Token）。
     * 长度：4~20000个字符。
     * > 需要输入原始OIDC Token，无需Base64解码。
     * @example `eyJraWQiOiJKQzl3eHpyaHFKMGd0****`
     */
    "OIDCToken"?: string;
    /**
     * 为STS Token额外添加的一个权限策略，进一步限制STS Token的权限。具体如下：
     * - 如果指定该权限策略，则STS Token最终的权限取RAM角色权限策略与该权限策略的交集。
     * - 如果不指定该权限策略，则STS Token最终的权限就是RAM角色的权限。
     * 长度：1~2048个字符。
     * @example `{"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}`
     */
    "Policy"?: string;
    /**
     * Token有效期。单位：秒。
     * 默认值：3600。最小值：900。最大值：`MaxSessionDuration`设置的时间。
     * 关于设置角色最大会话时间`MaxSessionDuration`的具体操作，请参见[CreateRole](~~28710~~)或[UpdateRole](~~28712~~)。
     * @example `3600`
     */
    "DurationSeconds"?: number;
    /**
     * 角色会话名称。
     * 该参数为用户自定义参数。通常设置为调用该API的用户身份，例如：用户名。在操作审计日志中，即使是同一个RAM角色执行的操作，也可以根据不同的RoleSessionName来区分实际操作者，以实现用户级别的访问审计。
     * 格式：包含英文字母、数字、半角句号（.）、at（@）、短划线（-）和下划线（_）。
     * 长度：2~64个字符。
     * @example `TestOidcAssumedRoleSession`
     */
    "RoleSessionName": string;
}
