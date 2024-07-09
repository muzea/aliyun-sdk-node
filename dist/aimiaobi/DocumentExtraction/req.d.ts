export interface DocumentExtractionRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxxxx_p_efm`
     */
    "AgentKey": string;
    /**
     * 待提取的链接列表
     */
    "Urls": string[];
}
