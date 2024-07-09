export interface DeleteVpdGrantRuleResponse {
    /**
     * 响应状态码
     * @example `0`
     */
    Code: number;
    /**
     * 错误信息。（当实例状态为异常时，提示异常原因）
     * @example `成功`
     */
    Message: string;
    /**
     * 当次请求的Request ID
     * @example `0901F411-28FA-5B9C-BAEE-7776463FF0DC`
     */
    RequestId: string;
    /**
     * 响应内容
     * @example `{}`
     */
    Content: any;
}
