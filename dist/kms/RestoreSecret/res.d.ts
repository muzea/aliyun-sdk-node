export interface RestoreSecretResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `e4885adf-548f-4ca5-8075-f540bbd3a55f`
     */
    RequestId: string;
}
