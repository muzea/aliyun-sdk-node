export interface ListRemediationsRequest {
    /**
     * 规则ID。多个规则ID之间用半角逗号（,）分隔。
     * 关于如何获取规则ID，请参见[ListConfigRules](~~169607~~)。
     * @example `cr-6b7c626622af00b4****`
     */
    "ConfigRuleIds"?: string;
    /**
     * 资源列表的页码。起始值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。取值范围：1~50。
     * @example `10`
     */
    "PageSize"?: number;
}
