export interface DebugDialogueRequest {
    /**
     * 用户表述
     * @example `7cefbff0-8d50-4d6f-b93c-73cee23c1555`
     */
    "ConversationId": string;
    /**
     * 会话上下文
     * @example `{}`
     */
    "AdditionalContext"?: string;
    /**
     * 实例id
     * @example `abb4aa26-3a8e-43dd-82f8-0c3898c9c67f`
     */
    "InstanceId": string;
    /**
     * 用户表述
     * @example `是的`
     */
    "Utterance": string;
}
