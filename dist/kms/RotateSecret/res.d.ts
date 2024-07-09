export interface RotateSecretResponse {
    /**
     * 轮转后的新凭据版本的版本号。
     * @example `000000123`
     */
    VersionId: string;
    /**
     * 凭据名称。
     * @example `RdsSecret/Mysql5.4/MyCred`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `10257c86-269d-43aa-aaf3-90ed4144bb7c`
     */
    RequestId: string;
    /**
     * 凭据ARN。
     * @example `acs:kms:cn-hangzhou:154035569884****:secret/RdsSecret/Mysql5.4/MyCred`
     */
    Arn: string;
}
