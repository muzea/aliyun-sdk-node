export interface UpdatePolicyRequest {
    /**
     * 要更新的权限策略名称。
     * @example `policy_test`
     */
    "Name": string;
    /**
     * 更改后的权限策略支持的操作。取值：
     * - RbacPermission/Template/CryptoServiceKeyUser：可以对KMS实例进行密码运算操作。
     * - RbacPermission/Template/CryptoServiceSecretUser：可以对KMS实例进行凭据相关操作。
     * 支持同时选择这两种操作。
     * @example `["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]`
     */
    "Permissions"?: string;
    /**
     * 更改后的允许访问的密钥和凭据。
     * - 密钥：格式为`key/${KeyId}`，如果允许访问当前KMS实例的所有密钥请输入key/*。
     * - 凭据：格式为`secret/${SecretName}`，如果允许访问当前KMS实例的所有凭据请输入secret/*。
     * @example `["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]`
     */
    "Resources"?: string;
    /**
     * 网络控制规则。
     * >查询已创建的网络控制规则，请参见[ListNetworkRules](~~2539433~~)。
     * @example `{"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}`
     */
    "AccessControlRules"?: string;
    /**
     * 描述信息。
     * @example `policy  description`
     */
    "Description"?: string;
}
