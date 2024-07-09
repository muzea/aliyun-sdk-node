export interface DeleteRuleResponse {
    /**
     * 错误信息。
     * @example `The event rule not existed!
    `
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `FF942675-F937-549C-A942-EB94FFE28DD3`
     */
    RequestId: string;
    /**
     * 状态码。说明 Success表示成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 是否调用成功。true：调用成功。                                 false：调用失败。
     * @example `true`
     */
    Success: boolean;
}
