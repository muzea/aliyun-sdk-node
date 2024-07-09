export interface SetSensitiveDefineRuleConfigRequest {
    /**
     * 自定义规则配置。key取值：
     * - **classKey**：检查项分类关键字。
     * - **ruleList**：规则关键字。
     * @example `[{\"classKey\": \"password\", \"ruleList\": [\"huaweicloud_ak\", \"ak_leak\"]}]`
     */
    "Config"?: string;
}
