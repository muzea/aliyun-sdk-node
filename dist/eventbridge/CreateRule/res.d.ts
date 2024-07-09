export interface CreateRuleResponse {
    /**
     * 错误信息
     * @example `Remote error. requestId: [xxxx], error code: [xxx], message: [The target in event rule is invalid! Endpoint is xxx`
     */
    Message: string;
    /**
     * 请求id。
     * @example `1AD6D598-7506-5D2C-81EA-30E3241A903A`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 事件规则的ARN，用于授权。
         * @example `acs:eventbridge:cn-hangzhou:123456789098****:eventbus/default/rule/MNSRule`
         */
        RuleARN: string;
    };
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
