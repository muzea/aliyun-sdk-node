export interface BatchDeleteDcdnWafRulesRequest {
    /**
     * 需要删除的防护规则ID列表，多个ID用英文逗号（,）分隔。
     * @example `20000001,20000002`
     */
    "RuleIds": string;
}
