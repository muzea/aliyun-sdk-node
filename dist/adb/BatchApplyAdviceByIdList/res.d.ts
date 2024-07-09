export interface BatchApplyAdviceByIdListResponse {
    /**
     * 批量应用建议执行结果。取值说明：
     * - 请求正常，返回**SUCCESS**。
     * - 请求异常，返回具体异常错误信息。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `86F92D26-B774-5FA1-8E53-82CBEEEBB012`
     */
    RequestId: string;
}
