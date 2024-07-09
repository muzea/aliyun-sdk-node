export interface PutSecretValueRequest {
    /**
     * 凭据的版本号，在该凭据内唯一。
     * @example `v3`
     */
    "VersionId": string;
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 凭据值。加密后存入指定的新版本中。
     * @example `importantdata`
     */
    "SecretData": string;
    /**
     * 凭据值类型。取值：
     * - text（默认值）
     * - binary
     * @example `text`
     */
    "SecretDataType"?: string;
    /**
     * 凭据版本在存入时需要被同时标记的版本状态。如果您不指定此参数，KMS默认为新版本标记ACSCurrent。
     * @example `["ACSCurrent","ACSNext"]`
     */
    "VersionStages"?: string;
}
