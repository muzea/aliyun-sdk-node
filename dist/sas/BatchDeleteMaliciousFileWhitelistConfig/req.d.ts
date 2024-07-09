export interface BatchDeleteMaliciousFileWhitelistConfigRequest {
    /**
     * 敏感文件加白规则ID列表。调用[ListMaliciousFileWhitelistConfigs](~~ListMaliciousFileWhitelistConfigs~~)获取敏感文件加白规则的ID。
     */
    "ConfigIdList"?: number[];
}
