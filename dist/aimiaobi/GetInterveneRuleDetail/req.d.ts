export interface GetInterveneRuleDetailRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `2daaa2e0c209xb26acb97009ea77bd4b_p_efm`
     */
    "AgentKey": string;
    /**
     * 规则id
     * @example `12345`
     */
    "RuleId"?: number;
}
