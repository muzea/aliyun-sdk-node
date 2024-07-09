export interface DeleteMonitorGroupDynamicRuleRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 动态规则对应的云产品类型，取值：ecs、rds、slb。
     * @example `ecs`
     */
    "Category": string;
}
