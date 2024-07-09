export interface DebugBeginDialogueResponse {
    /**
     * 动作指令
     * @example `Broadcast`
     */
    Action: string;
    /**
     * IVR播报是否可打断
     * @example `true`
     */
    Interruptible: boolean;
    /**
     * 请求id
     * @example `14C39896-AE6D-4643-9C9A-E0566B2C2DDD`
     */
    RequestId: string;
    /**
     * 动作指令参数
     * @example `{}`
     */
    ActionParams: string;
    /**
     * 播报内容
     * @example `您好，欢迎致电智能助手`
     */
    TextResponse: string;
}
