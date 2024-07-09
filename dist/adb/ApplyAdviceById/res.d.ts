export interface ApplyAdviceByIdResponse {
    /**
     * 应用建议执行结果。取值说明：
     * - 请求正常，返回**SUCCESS**。
     * - 请求异常，返回具体异常错误信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5DC10091-348D-12B1-906D-AB49D658012E`
     */
    RequestId: string;
}
