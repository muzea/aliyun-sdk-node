export interface SetKeyPolicyRequest {
    /**
     * 密钥ID或密钥资源名称（ARN）。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 密钥策略名称。仅支持固定取值default。
     * @example `default`
     */
    "PolicyName"?: string;
    /**
     * 密钥策略的具体内容，JSON格式。最大长度为32768个字节。
     * 密钥策略内容包含：
     * - Version：密钥策略的版本，目前版本仅支持设置为1。
     * - Statement：密钥策略的语句，每个密钥策略包含一个或多个语句。
     * 密钥策略格式为：
     * ```
     * {
     *     "Version": "1",
     *     "Statement": [
     *         {
     *             "Sid": "Enable RAM User Permissions",
     *             "Effect": "Allow",
     *             "Principal": {
     *               "RAM": "acs:ram::112890462****:root"
     *             }
     *             "Action": [
     *                 "kms:*"
     *             ],
     *             "Resource": [
     *                 "*"
     *             ]
     *         }
     *     ]
     * }
     * ```
     * Statement详细介绍：
     * - Sid：可选，表示自定义的语句标识符。内容长度小于等于128字符，支持的字符为：大写英文字母（A-Z）、小写英文字母（a-z）、数字（0-9），特殊字符（ _/+=.@-）。
     * - Effect：必选，表示是允许还是拒绝该策略语句中的权限。取值为：Allow或Deny。
     * - Principal：必选，表示权限策略的授权主体，支持设置为当前阿里云账号（即密钥所属的阿里云账号），当前阿里云账号下的RAM用户、RAM角色，其他阿里云账号下的RAM用户、RAM角色。
     * - Action：必选，表示要允许或拒绝的API操作，内容必须以"kms:"开头。操作权限列表的范围，请参见[密钥策略概述](~~2716468~~)。如果您设置了列表外的操作，设置后也不会生效。
     * - Resource：必选，取值只能是*，表示本KMS密钥。
     * >授权给其他阿里云账号下的RAM用户、RAM角色后，您仍需在访问控制RAM侧，使用该RAM用户、RAM角色的阿里云账号为其授权使用该密钥，RAM用户、RAM角色才能使用该密钥。具体操作，请参见[密钥管理服务自定义权限策略参考](~~480682~~)、[为RAM用户授权](~~116146~~)、[为RAM角色授权](~~116147~~)。
     * @example `{"Statement":[{"Action":["kms:*"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:*"]},"Resource":["*"],"Sid":"kms default key policy"},{"Action":["kms:List*","kms:Describe*","kms:Create*","kms:Enable*","kms:Disable*","kms:Get*","kms:Set*","kms:Update*","kms:Delete*","kms:Cancel*","kms:TagResource","kms:UntagResource","kms:ImportKeyMaterial","kms:ScheduleKeyDeletion"],"Effect":"Allow","Principal":{"RAM":["acs:ram::119285303511****:user/for_test_policy"]},"Resource":["*"]}],"Version":"1"}`
     */
    "Policy": string;
}
