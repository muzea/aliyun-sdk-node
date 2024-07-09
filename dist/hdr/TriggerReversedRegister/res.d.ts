export interface TriggerReversedRegisterResponse {
    /**
     * 错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `1D39F0BE-B3F9-5AA9-AD49-BE8CD7B4BF7B`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-000fzufp79idzl6bniso`
     */
    TaskId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: boolean;
}
