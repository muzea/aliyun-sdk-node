export interface DeleteGeneratedContentRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 文档唯一标识
     * @example `99`
     */
    "Id": number;
}
