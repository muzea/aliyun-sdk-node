export interface SilenceTimeoutResponse {
    /**
     * 动作
     * @example `TransferToAgent`
     */
    Action: string;
    /**
     * 是否打断
     * @example `false`
     */
    Interruptible: boolean;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 动作参数
     * @example `{ "skillGroupId": "ABC"}`
     */
    ActionParams: string;
    /**
     * 文本信息
     * @example `正在为你转接人工坐席`
     */
    TextResponse: string;
}
