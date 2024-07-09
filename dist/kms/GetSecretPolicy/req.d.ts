export interface GetSecretPolicyRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret_test`
     */
    "SecretName": string;
    /**
     * 凭据策略名称。仅支持固定值default。
     * @example `default`
     */
    "PolicyName"?: string;
}
