export interface UpdateSecretResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5b75d8b1-5b6a-4ec0-8e0c-c08befdfad47`
     */
    RequestId: string;
}
