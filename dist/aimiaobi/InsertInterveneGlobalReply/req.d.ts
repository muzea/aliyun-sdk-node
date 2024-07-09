export interface InsertInterveneGlobalReplyRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `xxx_efm`
     */
    "AgentKey": string;
    /**
     * 回复内容列表
     */
    "ReplyMessagList"?: {
        /**
         * 回复类型
         * @example `全局回复的类型`
         */
        ReplyType: string;
        /**
         * 回复内容
         * @example `抱歉，问题我无法回答`
         */
        Message: string;
    }[];
}
