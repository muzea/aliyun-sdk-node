export interface DescribeRuleGroupsResponse {
    /**
     * 请求id。
     * @example `02E9A4B8-90FB-5F41-A049-*`
     */
    RequestId: string;
    /**
     * 当前请求的执行状态：
     * - **0**：等待执行。
     * - **1**：正在执行中。
     * - **2**：已执行完成。
     *
     * @example `2`
     */
    TaskStatus: number;
    /**
     * 返回结果的总数。
     * @example `1`
     */
    Total: number;
    /**
     * waf的请求id。
     * @example `123`
     */
    WafTaskId: string;
    /**
     * 规则组列表。
     */
    RuleGroups: {
        /**
         * 规则组类型。取值：
         * - **10**：系统规则组
         * - **1**：自定义规则组
         * @example `1`
         */
        Type: number;
        /**
         * 当前规则的数量。
         * @example `1`
         */
        RuleCnt: number;
        /**
         * 规则组更新时间，秒级时间戳
         * @example `1711445265`
         */
        RuleGroupUpdateTime: number;
        /**
         * 规则组ID。
         * @example `116562`
         */
        PolicyId: number;
        /**
         * 规则组名称。
         * @example `rule_group_test`
         */
        Name: string;
        /**
         * 规则组模板
         * @example `1102`
         */
        TemplatePolicyId: number;
        /**
         * 规则模板的名称。
         * @example `rule_group_test`
         */
        RuleGroupTemplateName: string;
        /**
         * 规则组描述。
         * @example `desc`
         */
        Desc: string;
        /**
         * 为当前配置设置一个版本号（用于实现乐观锁控制）。
         * @example `11`
         */
        WafVersion: number;
        /**
         * 引用当前规则组的域名列表。
         */
        DomainList: string[];
    }[];
}
