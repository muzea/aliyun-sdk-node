export interface DebugDialogueResponse {
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
     * @example `d74d6290-7cbe-4436-b5d7-014ebb0f4060`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{}`
     */
    ActionParams: string;
    /**
     * 播报的内容
     * @example `80d11be3-faad-4101-b4b0-59dbea28aaf0`
     */
    TextResponse: string;
}
