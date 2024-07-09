export interface AssociateChatbotInstanceRequest {
    /**
     * 导航实例ID
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 小蜜机器人ID
     * @example `chatbot-720edd02b66a`
     */
    "ChatbotInstanceId"?: string;
    /**
     * 小蜜机器名字
     * @example `客服机器人`
     */
    "ChatbotName"?: string;
    "UnionSource"?: string;
    "NluServiceParamsJson"?: string;
    "NluServiceType"?: string;
}
