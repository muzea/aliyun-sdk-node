export interface GetSecretValueRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 版本状态。默认值：ACSCurrent。
     * 输入该参数时返回指定版本状态的凭据值，不输入该参数时返回ACSCurrent版本状态的凭据值。
     * > RDS凭据、RAM凭据和ECS凭据只能获取ACSPrevious和ACSCurrent对应版本的凭据值。
     * @example `ACSCurrent`
     */
    "VersionStage"?: string;
    /**
     * 版本号。
     * > RDS凭据、RAM凭据和ECS凭据不支持指定VersionId，设置该参数将被忽略。
     * @example `v1`
     */
    "VersionId"?: string;
    /**
     * 是否获取凭据的拓展配置。取值：
     * - true：获取
     * - false（默认值）：不获取
     * > 通用凭据不支持拓展配置，设置该参数将被忽略。
     * @example `true`
     */
    "FetchExtendedConfig"?: boolean;
}
