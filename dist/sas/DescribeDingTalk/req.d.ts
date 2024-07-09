export interface DescribeDingTalkRequest {
    /**
     * 通知名称。
     * @example `TestRuleAction`
     */
    "RuleActionName"?: string;
    /**
     * 分页查询时，每页最大显示的通知数量。默认值为**20**，表示每页显示20条信息。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
