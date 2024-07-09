export interface UpdateSecretRotationPolicyResponse {
    /**
     * 凭据名称。
     * @example `RdsSecret/Mysql5.4/MyCred`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2c124f6f-4210-499f-b88a-69f54004d2d8`
     */
    RequestId: string;
}
