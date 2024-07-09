export interface ListInterceptionRulePageRequest {
    /**
     * 指定要查询的容器集群的ID。
     * @example `cc41de13ab5474210bc0ce772a009****`
     */
    "ClusterId": string;
    /**
     * 查询条件。
     * @example `80`
     */
    "Criteria"?: string;
    /**
     * 搜索条件类型。取值：
     * - **ID**
     * - **RULE_NAME**
     * - **SRC_TARGET**
     * - **DST_TARGET**
     * - **DST_PORT**
     * - **RULE_SWITCH**
     * - **INTERCEPTOR_TYPE**
     * @example `DST_PORT`
     */
    "CriteriaType"?: string;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，当前页显示数据条数。
     * @example `50`
     */
    "PageSize": number;
}
