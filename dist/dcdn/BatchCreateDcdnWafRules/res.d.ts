export interface BatchCreateDcdnWafRulesResponse {
    /**
     * 请求ID。
     * @example `CB1A380B-09F0-41BB-280B-72F8FD6DA2FE`
     */
    RequestId: string;
    RuleIds: {
        RuleId: string[];
    };
}
