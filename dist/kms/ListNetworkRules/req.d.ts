export interface ListNetworkRulesRequest {
    /**
     * 分页查询时，设置当前页面的页码。默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时，设置每页包含网络控制规则的数量。取值范围：1~100，默认值为20。
     * @example `10`
     */
    "PageSize"?: number;
}
