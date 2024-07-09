export interface DeleteVccGrantRuleResponse {
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
     * @example `BDBCC783-84CA-5733-8EEA-645C88B9009C`
     */
    RequestId: string;
    /**
     * 响应内容
     * @example `{}`
     */
    Content: any;
}
