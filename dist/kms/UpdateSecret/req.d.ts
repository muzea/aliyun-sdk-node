export interface UpdateSecretRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 凭据的描述信息。
     * @example `datainfo`
     */
    "Description"?: string;
    /**
     * 拓展配置中的自定义数据。
     * > - 如果指定该参数，将会更新凭据已有的拓展配置。
     * - 通用凭据不支持设置该参数。
     * @example `{"DBName":"app1","Port":"3306"}`
     */
    "ExtendedConfig.CustomData"?: any;
}
