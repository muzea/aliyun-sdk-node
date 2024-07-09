export interface SilenceTimeoutRequest {
    /**
     * 实例ID
     * @example `0099b75d-60fd-4c63-8541-7fbba0ae6bb0`
     */
    "InstanceId": string;
    /**
     * 会话ID
     * @example `0099b75d-60fd-4c63-8541-7fbba0ae6bb0`
     */
    "ConversationId": string;
    /**
     * 会话信息上下文
     * @example `{}`
     */
    "InitialContext"?: string;
    /**
     * 实例所有者id
     * @example `1231639035307976`
     */
    "InstanceOwnerId"?: number;
}
