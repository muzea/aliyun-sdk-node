export interface DeleteRuleRequest {
    /**
     * 规则ID。
     * @example `1`
     */
    "RuleId": number;
    /**
     * 当规则有关联质检任务时，还是否删除。
     * @example `true`
     */
    "ForceDelete"?: boolean;
    /**
     * 是否为新版质检，0：旧版质检；1：新版直接。默认为1
     * @example `1`
     */
    "IsSchemeData"?: number;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
