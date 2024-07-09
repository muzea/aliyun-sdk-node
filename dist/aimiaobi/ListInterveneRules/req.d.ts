export interface ListInterveneRulesRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 页面尺寸
     * @example `10`
     */
    "PageSize"?: number;
}
