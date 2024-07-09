export interface RotateSecretRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `RdsSecret/Mysql5.4/MyCred`
     */
    "SecretName": string;
    /**
     * 轮转后的新凭据版本的版本号。
     * > 版本号用于保证请求的幂等性。KMS使用版本号来防止您的应用在请求失败后进行重试时，意外创建重复的版本。如果相同的版本号已经存在，轮转的请求会被忽略，服务端会返回成功。
     * @example `000000123`
     */
    "VersionId": string;
}
