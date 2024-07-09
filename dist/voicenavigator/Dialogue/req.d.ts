export interface DialogueRequest {
    /**
     * 实例id
     * @example `21e0b2a3-168d-4ba7-9009-afc42666eb54`
     */
    "InstanceId": string;
    /**
     * 会话id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    "ConversationId": string;
    /**
     * 用户表述
     * @example `行吧，那我就不打扰您了，再见。`
     */
    "Utterance": string;
    /**
     * 被叫号码
     * @example `10086`
     */
    "CalledNumber"?: string;
    /**
     * 主叫号码
     * @example `18851708605`
     */
    "CallingNumber"?: string;
    /**
     * 会话上下文
     * @example `{}`
     */
    "AdditionalContext"?: string;
    /**
     * 实例所属的阿里云账号id
     * @example `1426738157626835`
     */
    "InstanceOwnerId"?: number;
    "Emotion"?: string;
}
