export interface DeleteTaskFlowEdgesByConditionResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `21234B66-6859-5558-9E5B-006EFE915CD0`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
