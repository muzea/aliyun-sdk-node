export interface GetAssetSelectionConfigRequest {
    /**
     * 资产选择业务类型。取值：
     * - **VIRUS\_SCAN\_CYCLE\_CONFIG**：病毒查杀配置
     * - **VIRUS\_SCAN\_ONCE\_TASK**：病毒查杀一次性扫描
     * - **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**：无代理检测告警加白规则
     * - **AGENTLESS_VUL_WHITE_LIST_[ID]**：无代理检测漏洞加白规则
     * - **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**：核心文件保护
     * @example `VIRUS_SCAN_CYCLE_CONFIG`
     */
    "BusinessType": string;
}
