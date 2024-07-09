export interface DeleteEventRuleTargetsRequest {
    /**
     * 事件报警规则名称。
     * 关于如何获取事件报警规则名称，请参见[DescribeEventRuleList](~~114996~~)。
     * @example `testRule`
     */
    "RuleName": string;
    /**
     * 事件报警规则ID列表。
     */
    "Ids": string[];
}
