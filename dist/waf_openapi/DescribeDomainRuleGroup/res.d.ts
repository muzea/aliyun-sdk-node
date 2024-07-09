export interface DescribeDomainRuleGroupResponse {
    /**
     * 域名绑定的防护规则组的ID。取值：
     * - **1011**：表示WAF内置的严格规则组。
     * - **1012**：表示WAF内置的中等规则组。
     * - **1013**：表示WAF内置的宽松规则组。
     * 其他取值表示您自定义的规则组的ID。
     * @example `1012`
     */
    RuleGroupId: number;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
    /**
     * 智能规则托管功能的启用状态。取值：
     * - **0**：表示关闭。
     * - **1**：表示开启。
     * @example `1`
     */
    WafAiStatus: number;
}
