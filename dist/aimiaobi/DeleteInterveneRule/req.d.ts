export interface DeleteInterveneRuleRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 规则id
     * @example `12345`
     */
    "RuleId"?: number;
}
