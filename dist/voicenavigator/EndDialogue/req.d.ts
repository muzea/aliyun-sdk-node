export interface EndDialogueRequest {
    /**
     * 实例id
     * @example `e48e45dd-e47a-4744-a063-f08cbebb1c5a`
     */
    "InstanceId": string;
    /**
     * 会话id
     * @example `8fb819b5-d032-48a9-ae5e-cff041b83596`
     */
    "ConversationId": string;
    /**
     * 实例所有者id
     * @example `1399572315967217`
     */
    "InstanceOwnerId"?: number;
    /**
     * 挂断参数
     * @example `{\"duration\":40,\"endTime\":1645082505345,\"hangUpDirection\":\"ivr\",\"hasLastPlaybackCompleted\":true,\"startTime\":1645082505305}`
     */
    "HangUpParams"?: string;
}
