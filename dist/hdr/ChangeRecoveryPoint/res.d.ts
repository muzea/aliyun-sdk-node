export interface ChangeRecoveryPointResponse {
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
     * @example `BBCC4082-98DF-5804-96C6-0E74C37C5867`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-0007wl5r0hvxrj68rrbg`
     */
    TaskId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
