export interface EnableSystemRuleResponse {
    /**
     * 错误信息
     * @example `null`
     */
    Message: string;
    /**
     * 请求ID
     * @example `3FEEAD12-CE22-4EDE-A729-CE94EC070610`
     */
    RequestId: string;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 统计维度
         * @example `4`
         */
        MetricType: number;
        /**
         * 阈值
         * @example `0.6`
         */
        Threshold: number;
        /**
         * 规则ID
         * @example `123`
         */
        RuleId: number;
        /**
         * 规则是否开启
         * @example `true`
         */
        Enable: boolean;
    };
    /**
     * 返回码
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
