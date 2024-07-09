export interface CollectedNumberResponse {
    /**
     * 动作
     * @example `Broadcast`
     */
    Action: string;
    /**
     * ivr播报是否可打断
     * @example `false`
     */
    Interruptible: boolean;
    /**
     * 请求id
     * @example `da37319b-6c83-4268-9f19-814aed62e401`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{\"duration\":31340,\"endTime\":1638243934786,\"hangUpDirection\":\"ivr\",\"startTime\":1638243903446}`
     */
    ActionParams: string;
    /**
     * 播报的文本
     * @example `收号内容是123`
     */
    TextResponse: string;
}
