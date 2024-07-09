export interface DebugCollectedNumberRequest {
    /**
     * 实例id
     * @example `7cefbff0-8d50-4d6f-b93c-73cee23c1555`
     */
    "InstanceId": string;
    /**
     * 会话id
     * @example `7cefbff0-8d50-4d6f-b93c-73cee23c1555`
     */
    "ConversationId": string;
    /**
     * 收号内容
     * @example `123`
     */
    "Number"?: string;
}
