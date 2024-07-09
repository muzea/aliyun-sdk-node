export interface UpdateSecretVersionStageResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `8cad259f-4d77-40ec-bbd7-b9c47a423bb9`
     */
    RequestId: string;
}
