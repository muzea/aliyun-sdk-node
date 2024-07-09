export interface DeleteSecretRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 是否立即删除凭据，且不允许恢复。
     * 取值范围：
     * - **true**
     * - **false**（默认值）
     * @example `false`
     */
    "ForceDeleteWithoutRecovery"?: string;
    /**
     * 计划删除凭据时，该参数用于指定删除窗口，窗口期内可以恢复凭据。取值：7天~30天。
     * 默认值：30。
     * > 当您需要立即删除凭据，即ForceDeleteWithoutRecovery取值为true时，不允许输入本参数。
     * @example `10`
     */
    "RecoveryWindowInDays"?: string;
}
