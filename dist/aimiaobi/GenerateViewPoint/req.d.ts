export interface GenerateViewPointRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `c160c841c8e54295bf2f441432785944_p_efm`
     */
    "AgentKey": string;
    /**
     * 引用的上下文数据
     */
    "ReferenceData"?: {
        /**
         * 传入的文章片段。
         */
        MiniDoc: string[];
    };
}
