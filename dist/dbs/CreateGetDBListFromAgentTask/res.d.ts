export interface CreateGetDBListFromAgentTaskResponse {
    /**
     * 错误码值。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `EB4DFD5E-3618-498D-BE35-4DBEA0072122`
     */
    RequestId: string;
    /**
     * 错误码字符串。
     * @example `InvalidParameter`
     */
    ErrCode: string;
    /**
     * 请求状态。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `This backupPlan can't support this action`
     */
    ErrMessage: string;
    /**
     * 异步任务ID。
     * @example `123456`
     */
    TaskId: number;
}
