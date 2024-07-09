export interface DescribeSecretRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * > 访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 是否在返回参数中包含凭据的资源标签。取值：
     * - true：包含资源标签。
     * - false（默认值）：不包含资源标签。
     * @example `true`
     */
    "FetchTags"?: string;
}
