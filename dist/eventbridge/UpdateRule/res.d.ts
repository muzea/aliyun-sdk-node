export interface UpdateRuleResponse {
    /**
     * 错误信息。
     * @example `EventRuleFilterPatternSchemaError`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7439944D-D9FC-5614-B65E-07A468988924`
     */
    RequestId: string;
    /**
     * 更新结果
     * @example `true`
     */
    Data: boolean;
    /**
     * 接口返回码：Success：表示成功。                                 其它：表示错误码。错误码详情，请参见错误码。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作成功返回true。
     * @example `true`
     */
    Success: boolean;
}
