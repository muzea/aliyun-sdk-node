export interface ListRemediationTemplatesRequest {
    /**
     * 修正类型。仅支持OOS（运维编排）。
     * @example `OOS`
     */
    "RemediationType"?: string;
    /**
     * 规则模板标识。
     * 关于如何获取规则模板标识，请参见[ListCompliancePackTemplates](~~261176~~)。
     * @example `oss-bucket-public-write-prohibited`
     */
    "ManagedRuleIdentifier"?: string;
    /**
     * 修正模板列表的页码。起始值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围：1~100，默认值：20。
     * @example `20`
     */
    "PageSize"?: number;
}
