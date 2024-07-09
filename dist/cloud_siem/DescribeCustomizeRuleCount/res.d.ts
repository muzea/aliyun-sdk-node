export interface DescribeCustomizeRuleCountResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 全部规则数。
         * @example `20`
         */
        InUseRuleNum: number;
        /**
         * 高危规则数。
         * @example `12`
         */
        HighRuleNum: number;
        /**
         * 中危规则数。
         * @example `5`
         */
        MediumRuleNum: number;
        /**
         * 低危规则数。
         * @example `3`
         */
        LowRuleNum: number;
        /**
         * 总规则数。
         * @example `10`
         */
        TotalRuleNum: number;
        /**
         * 自定义规则数。
         * @example `10`
         */
        CustomizeRuleNum: number;
        /**
         * 预定义规则数。
         * @example `10`
         */
        PredefinedRuleNum: number;
        /**
         * 不产生事件规则数。
         * @example `3`
         */
        UnEventRuleNum: number;
        /**
         * 专家规则数。
         * @example `7`
         */
        ExpertRuleNum: number;
        /**
         * 图计算规则数。
         * @example `2`
         */
        GraphComputingRuleNum: number;
        /**
         * 告警透传规则数。
         * @example `3`
         */
        SingleAlertRuleNum: number;
        /**
         * 同类聚合规则数。
         * @example `3`
         */
        AggregationRuleNum: number;
    };
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
