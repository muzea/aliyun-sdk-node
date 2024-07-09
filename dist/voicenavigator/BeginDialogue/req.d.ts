export interface BeginDialogueRequest {
    /**
     * 被叫号码
     * @example `10086`
     */
    "CalledNumber"?: string;
    /**
     * 主叫号码
     * @example `1358158****`
     */
    "CallingNumber": string;
    /**
     * 会话id
     * @example `c28fc549-d88f-4f6e-85ad-a0806e5e39c0`
     */
    "ConversationId": string;
    /**
     * 会话上下文
     * @example `{\"channelId\":\"fe2559d3-5fc9-4fa5-8314-32b9f762791d\"}`
     */
    "InitialContext"?: string;
    /**
     * 实例id。
     * @example `4d7db6670b8e41b5adb1f21560ea9272`
     */
    "InstanceId": string;
    /**
     * 实例所有者id
     * @example `1231639035307976`
     */
    "InstanceOwnerId"?: number;
}
