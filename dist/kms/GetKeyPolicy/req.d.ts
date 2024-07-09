export interface GetKeyPolicyRequest {
    /**
     * 密钥ID或密钥资源名称（ARN）。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 密钥策略名称。仅支持固定值default。
     * @example `default`
     */
    "PolicyName"?: string;
}
