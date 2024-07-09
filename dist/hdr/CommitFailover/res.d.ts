export interface CommitFailoverResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `18603D03-FEA4-5FA8-878F-B03F11578F5F`
     */
    RequestId: string;
    /**
     * 任务ID
     * @example `t-0007wl5r0hvxrj68rrbg`
     */
    TaskId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
