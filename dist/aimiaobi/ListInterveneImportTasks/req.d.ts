export interface ListInterveneImportTasksRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 页号
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页尺寸
     * @example `20`
     */
    "PageSize"?: number;
}
