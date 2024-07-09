export interface DeleteRuleV4Request {
    /**
     * 规则ID。
     * @example `1`
     */
    "RuleId": number;
    /**
     * 当规则有关联质检任务时，还是否删除。
     * @example `false`
     */
    "ForceDelete"?: boolean;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
