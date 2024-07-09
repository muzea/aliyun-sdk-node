export interface CollectedNumberRequest {
    /**
     * 示例id
     * @example `0099b75d-60fd-4c63-8541-7fbba0ae6bb0`
     */
    "InstanceId": string;
    /**
     * 会话id
     * @example `0099b75d-60fd-4c63-8541-7fbba0ae6bb0`
     */
    "ConversationId": string;
    /**
     * 号码
     * @example `1500060224`
     */
    "Number"?: string;
    /**
     * 实例所有者id
     * @example `1426738157626835`
     */
    "InstanceOwnerId"?: number;
    "AdditionalContext"?: string;
}
