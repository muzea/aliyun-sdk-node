export interface DisableAdviceServiceResponse {
    /**
     * 调用结果的信息。取值说明：
     * - 请求正常，返回**Success**。
     * - 请求异常，返回具体异常信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `57EC6CCA-A582-572C-A33D-F61845CBC03C`
     */
    RequestId: string;
}
