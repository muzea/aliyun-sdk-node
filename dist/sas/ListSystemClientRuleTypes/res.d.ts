export interface ListSystemClientRuleTypesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `79CFF74D-E967-5407-8A78-EE03B925****`
     */
    RequestId: string;
    /**
     * 规则类型列表。
     */
    RuleTypes: string[];
}
