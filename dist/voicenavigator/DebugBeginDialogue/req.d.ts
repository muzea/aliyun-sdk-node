export interface DebugBeginDialogueRequest {
    /**
     * 被叫号码
     * @example `10086`
     */
    "CalledNumber"?: string;
    /**
     * 主叫号码
     * @example `135815*****`
     */
    "CallingNumber": string;
    /**
     * 会话id
     * @example `8a503680-815d-473e-a9b0-e010f47a64d2`
     */
    "ConversationId": string;
    /**
     * 会话信息
     * @example `{}`
     */
    "InitialContext"?: string;
    /**
     * 实例id
     * @example `8a503680-815d-473e-a9b0-e010f47a64d2`
     */
    "InstanceId": string;
}
