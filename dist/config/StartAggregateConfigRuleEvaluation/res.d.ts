export interface StartAggregateConfigRuleEvaluationResponse {
    /**
     * 请求ID。
     * @example `ABC0FFF8-0B44-40C6-8BBF-3A185EFDD212`
     */
    RequestId: string;
    /**
     * 规则执行结果。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Result: boolean;
}
