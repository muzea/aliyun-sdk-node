export interface ReversedEnableReplicationResponse {
    /**
     * 接口返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D5CF3A51-1F39-5B16-AC0C-AD9B632D100D`
     */
    RequestId: string;
    /**
     * 任务id。
     * @example `t-0004ka624vrxwublmqw6`
     */
    TaskId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
