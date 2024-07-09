export interface DialogueResponse {
    /**
     * 动作
     * @example `Broadcast`
     */
    Action: string;
    /**
     * ivr播报是否可打断
     * @example `true`
     */
    Interruptible: boolean;
    /**
     * 请求id
     * @example `9DB8BA95-4513-54B9-9C67-A28909CFB4AD`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{\"duration\":2420,\"endTime\":1651717326805,\"hangUpDirection\":\"client\",\"hasLastPlaybackCompleted\":true,\"startTime\":1651717324385}`
     */
    ActionParams: string;
    /**
     * 播报的文本
     * @example `您好，欢迎致电智能助手`
     */
    TextResponse: string;
}
