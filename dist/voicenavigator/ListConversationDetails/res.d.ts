export interface ListConversationDetailsResponse {
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 对话列表
     */
    ConversationDetails: {
        /**
         * 动作
         * @example `Dialogue`
         */
        Action: string;
        /**
         * 讲述人 Customer = 客户，Chatbot = 机器人
         * @example `Chatbot`
         */
        Speaker: string;
        /**
         * 创建时间
         * @example `1582266750353`
         */
        CreateTime: number;
        /**
         * 会话id
         * @example `af81a389-91f0-4157-8d82-720edd02b66a`
         */
        ConversationId: string;
        /**
         * 动作参数
         * @example `{}`
         */
        ActionParams: string;
        /**
         * 本轮次会话交互的序列号
         * @example `af81a389-91f0-4157-8d82-720edd02b66a`
         */
        SequenceId: string;
        /**
         * 用户表述
         * @example `你好`
         */
        Utterance: string;
    }[];
}
