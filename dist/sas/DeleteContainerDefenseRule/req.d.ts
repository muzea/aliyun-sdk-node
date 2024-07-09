export interface DeleteContainerDefenseRuleRequest {
    /**
     * 需要删除的规则的ID列表。
     * > 您可以调用[ListContainerDefenseRule](~~2590599~~)接口获取该参数。
     */
    "RuleIds"?: number[];
}
