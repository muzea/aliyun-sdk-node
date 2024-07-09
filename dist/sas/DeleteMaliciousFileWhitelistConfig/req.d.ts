export interface DeleteMaliciousFileWhitelistConfigRequest {
    /**
     * 无代理检测敏感文件告警加白规则ID。可调用[ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~)获取敏感文件加白规则的ID。
     * @example `1`
     */
    "ConfigId"?: number;
}
