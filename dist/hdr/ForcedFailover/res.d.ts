export interface ForcedFailoverResponse {
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
     * @example `26DF0E81-08E2-5AE3-96AA-05F5F826261C`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-000ios55mggw4ifiy3nc`
     */
    TaskId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
