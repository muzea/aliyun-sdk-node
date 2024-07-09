export interface DeleteSecretResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `38bbed2a-15e0-45ad-98d4-816ad2ccf4ea`
     */
    RequestId: string;
    /**
     * 凭据的删除时间，为时间戳格式。
     * @example `2024-04-15T07:02:14Z`
     */
    PlannedDeleteTime: string;
}
