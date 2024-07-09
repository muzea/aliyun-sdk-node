export interface GetDBTaskSQLJobLogResponse {
    /**
     * 请求ID。
     * @example `4AC23904-55DE-550B-9676-E8946F07****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `JobId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `MissingJobId`
     */
    ErrorCode: string;
    /**
     * 调度详情日志。
     * @example `log_****`
     */
    Log: string;
}
