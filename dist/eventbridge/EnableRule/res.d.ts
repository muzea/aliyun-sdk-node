export interface EnableRuleResponse {
    /**
     * 错误信息。
     * @example `EventRuleNotExisted`
     */
    Message: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `580A938B-6107-586C-8EC7-F22EEBEDA9E6`
     */
    RequestId: string;
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
