export interface CreatePolicyResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3bf02f7a-015b-4f34-be0f-c4543fda2d33`
     */
    RequestId: string;
    /**
     * 权限策略的ARN。
     * @example `acs:kms:cn-hangzhou:119285303511****:policy/policy_test`
     */
    Arn: string;
    /**
     * 权限策略名称。
     * @example `policy_test`
     */
    Name: string;
    /**
     * 描述信息。
     * @example `policy  description`
     */
    Description: string;
    /**
     * 权限策略的作用域。
     * @example `kst-hzz634e67d126u9p9****`
     */
    KmsInstance: string;
    /**
     * 权限策略支持的操作。
     * @example `["RbacPermission/Template/CryptoServiceKeyUser", "RbacPermission/Template/CryptoServiceSecretUser"]`
     */
    Permissions: string;
    /**
     * 允许访问的密钥和凭据。
     * - `key/*`表示允许访问当前KMS实例的所有密钥。
     * - `secret/*`表示允许访问当前KMS实例的所有凭据。
     * @example `["secret/acs/ram/user/ram-secret", "secret/acs/ram/user/acr-master", "key/key-hzz63d9c8d3dfv8cv****"]`
     */
    Resources: string;
    /**
     * 网络控制规则名称。
     * @example `{"NetworkRules":["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]}`
     */
    AccessControlRules: string;
}
