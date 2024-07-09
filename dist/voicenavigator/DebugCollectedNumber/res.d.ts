export interface DebugCollectedNumberResponse {
    /**
     * 动作
     * @example `Broadcast`
     */
    Action: string;
    /**
     * ivr 播报是否可打断
     * @example `true`
     */
    Interruptible: boolean;
    /**
     * 请求id
     * @example `abb4aa26-3a8e-43dd-82f8-0c3898c9c67f`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{}`
     */
    ActionParams: string;
    /**
     * 播报的文本内容
     * @example `您好，欢迎致电智能助手`
     */
    TextResponse: string;
}
