export interface CreateTaskFlowResponse {
    /**
     * 请求ID。此次请求的唯一标识，用于定位日志，排查问题。
     * @example `19DA51A9-AC3E-5C36-8351-07EBCD2B89A1`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `User can not access to Tenant [1]`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务流ID，任务流的唯一标识。
     * @example `33***`
     */
    DagId: number;
}
