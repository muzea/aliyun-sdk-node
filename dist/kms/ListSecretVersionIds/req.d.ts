export interface ListSecretVersionIdsRequest {
    /**
     * 凭据名称或凭据资源名称（ARN）。
     * >访问其他阿里云账号下的凭据时，必须输入凭据ARN。凭据ARN的格式为`acs:kms:${region}:${account}:secret/${secret-name}`。
     * @example `secret001`
     */
    "SecretName": string;
    /**
     * 返回值中是否包含没有版本状态的凭据版本。
     * 取值范围：
     * - false（默认值）：不包含
     * - true：包含
     * @example `false`
     */
    "IncludeDeprecated"?: string;
    /**
     * 分页查询时，设置当前页面的页码。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页大小。默认值：20。
     * @example `10`
     */
    "PageSize"?: number;
}
