export interface RegisterServersResponse {
    /**
     * 返回结果码
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
     * @example `D76E741C-68B7-5281-8C5B-698AD06B0D89`
     */
    RequestId: string;
    /**
     * 任务ID。
     * @example `t-0001nlbcl4bynbb67x4w`
     */
    TaskId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
}
