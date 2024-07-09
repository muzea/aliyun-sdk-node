export interface CreateVpdGrantRuleResponse {
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
     * @example `DBAD15D6-3F47-5B36-8A92-57C2919D13D0`
     */
    RequestId: string;
    /**
     * 响应内容
     * @example `{}`
     */
    Content: {
        /**
         * 授权资源主键ID
         * @example `grant-rule-hnevjkmw`
         */
        GrantRuleId: string;
    };
}
