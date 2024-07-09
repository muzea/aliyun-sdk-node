export interface PutGroupMetricRuleResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 报错信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `461CF2CD-2FC3-4B26-8645-7BD27E7D0F1D`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 创建或修改报警规则的结果。
     */
    Result: {
        /**
         * 报警规则ID。
         * @example `123456`
         */
        RuleId: string;
    };
}
