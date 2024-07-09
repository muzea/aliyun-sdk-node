export interface ListAliasesByKeyIdRequest {
    /**
     * 密钥的ID或密钥资源名称（ARN）。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 当前页数。
     * 取值范围：大于0的整数。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回的结果个数。
     * 取值范围：0~101。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
