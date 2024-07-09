export interface PutSecretValueResponse {
    /**
     * 凭据名称。
     * @example `secret001`
     */
    SecretName: string;
    /**
     * 凭据的版本号。
     * @example `v3`
     */
    VersionId: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `f94ec9d3-2d10-4922-9a5c-5dcd5ebcb5e8`
     */
    RequestId: string;
    VersionStages: {
        /**
         * 凭据的版本状态。
         */
        VersionStage: string[];
    };
}
