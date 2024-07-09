export interface ListFileProtectRuleRequest {
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 配置规则名称。
     * @example `test-rule-1`
     */
    "RuleName"?: string;
    /**
     * 报警通知级别。取值如下：
     * - 0： 不告警
     * - 1： 提醒
     * - 2： 可疑
     * - 3： 高危
     * @example `0`
     */
    "AlertLevel"?: number;
    /**
     * 规则在客户端的表现形式。取值如下：
     * - pass： 放过
     * - alert： 告警
     * @example `pass`
     */
    "RuleAction"?: string;
}
