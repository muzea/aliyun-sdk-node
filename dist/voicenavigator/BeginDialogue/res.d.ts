export interface BeginDialogueResponse {
    /**
     * 动作
     * @example `Broadcast`
     */
    Action: string;
    /**
     * 是否可打断ivr播报
     * @example `true`
     */
    Interruptible: boolean;
    /**
     * 请求ID。
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{\"duration\":31340,\"endTime\":1638243934786,\"hangUpDirection\":\"ivr\",\"startTime\":1638243903446}`
     */
    ActionParams: string;
    /**
     * 文本信息
     * @example `您好，欢迎致电智能助手`
     */
    TextResponse: string;
}
