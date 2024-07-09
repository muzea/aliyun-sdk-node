export interface DescribeConversationContextResponse {
    /**
     * 请求id
     * @example `b19af5ce5314ac08108d1b33fe20e15`
     */
    RequestId: string;
    /**
     * 会话上下文数据
     * @example ` {         "CallingNumber": "135815***",         "AdditionalContext": "",         "ConversationId": "361c8a53-0e29-42f3-8aa7-c7752d010399"     }`
     */
    ConversationContext: string;
}
