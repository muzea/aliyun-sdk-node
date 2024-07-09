export interface DescribeSchedulerRulesRequest {
    /**
     * DDoS高防实例在资源管理产品中所属的资源组ID。默认为空，即属于默认资源组。
     * @example `default`
     */
    "ResourceGroupId"?: string;
    /**
     * 规则名称。
     * @example `testrule`
     */
    "RuleName"?: string;
    /**
     * 分页查询请求时返回的页码。例如，查询第一页的返回结果，则填写**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面显示的记录数量。
     * @example `10`
     */
    "PageSize": number;
}
