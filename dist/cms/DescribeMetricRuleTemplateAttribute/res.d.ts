export interface DescribeMetricRuleTemplateAttributeResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8F3A82AD-DA92-52B0-8EC6-C059D1C3839F`
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
     * 报警模板详情。
     */
    Resource: {
        /**
         * 报警模板描述信息。
         * @example `ECS模板`
         */
        Description: string;
        /**
         * 报警模板名称。
         * @example `ECS_Template1`
         */
        Name: string;
        /**
         * 报警模板版本。
         * @example `1`
         */
        RestVersion: string;
        /**
         * 报警模板ID。
         * @example `70****`
         */
        TemplateId: string;
        AlertTemplates: {
            /**
             * 报警模板列表。
             */
            AlertTemplate: {
                /**
                 * 监控项名称。
                 * @example `cpu_total`
                 */
                MetricName: string;
                /**
                 * 报警维度扩展选项。
                 * @example `{"disk":"/"}`
                 */
                Selector: string;
                /**
                 * 触发报警回调的URL地址。
                 * @example `https://www.aliyun.com`
                 */
                Webhook: string;
                /**
                 * 云服务的命名空间。
                 * @example `acs_ecs_dashboard`
                 */
                Namespace: string;
                /**
                 * 云服务名称缩写。
                 * @example `ecs`
                 */
                Category: string;
                /**
                 * 报警规则名称。
                 * @example `ECS_Rule`
                 */
                RuleName: string;
                /**
                 * 无监控数据时报警的处理方式。取值：
                 * - KEEP_LAST_STATE（默认值）：不做任何处理。
                 * - INSUFFICIENT_DATA：报警内容为无数据。
                 * - OK：正常。
                 * @example `KEEP_LAST_STATE`
                 */
                NoDataPolicy: string;
                /**
                 * 阈值及报警级别。
                 */
                Escalations: {
                    /**
                     * Info级别报警触发条件。
                     */
                    Info: {
                        /**
                         * Info级别的阈值比较符。取值：
                         * - GreaterThanOrEqualToThreshold：大于等于。
                         * - GreaterThanThreshold：大于。
                         * - LessThanOrEqualToThreshold：小于等于。
                         * - LessThanThreshold：小于。
                         * - NotEqualToThreshold：不等于。
                         * - GreaterThanYesterday：同比昨天时间上涨。
                         * - LessThanYesterday：同比昨天时间下降。
                         * - GreaterThanLastWeek：同比上周同一时间上涨。
                         * - LessThanLastWeek：同比上周同一时间下降。
                         * - GreaterThanLastPeriod：环比上周期上涨。
                         * - LessThanLastPeriod：环比上周期下降。
                         * @example `GreaterThanOrEqualToThreshold`
                         */
                        ComparisonOperator: string;
                        /**
                         * Info级别的重试次数。
                         * @example `3`
                         */
                        Times: number;
                        /**
                         * Info级别的阈值。
                         * @example `90`
                         */
                        Threshold: string;
                        /**
                         * Info级别的统计方法。
                         * 每个云服务的`Statistics`取值不同。更多信息，请参见[云服务监控项](~~163515~~)。
                         * @example `Average`
                         */
                        Statistics: string;
                    };
                    /**
                     * Warn级别报警触发条件。
                     */
                    Warn: {
                        /**
                         * Warn级别阈值的比较符。取值：
                         * - GreaterThanOrEqualToThreshold：大于等于。
                         * - GreaterThanThreshold：大于。
                         * - LessThanOrEqualToThreshold：小于等于。
                         * - LessThanThreshold：小于。
                         * - NotEqualToThreshold：不等于。
                         * - GreaterThanYesterday：同比昨天时间上涨。
                         * - LessThanYesterday：同比昨天时间下降。
                         * - GreaterThanLastWeek：同比上周同一时间上涨。
                         * - LessThanLastWeek：同比上周同一时间下降。
                         * - GreaterThanLastPeriod：环比上周期上涨。
                         * - LessThanLastPeriod：环比上周期下降。
                         * @example `GreaterThanOrEqualToThreshold`
                         */
                        ComparisonOperator: string;
                        /**
                         * Warn级别的重试次数。
                         * @example `3`
                         */
                        Times: number;
                        /**
                         * Warn级别的阈值。
                         * @example `90`
                         */
                        Threshold: string;
                        /**
                         * Warn级别的统计方法。
                         * 每个云服务的`Statistics`取值不同。更多信息，请参见[云服务监控项](~~163515~~)。
                         * @example `Average`
                         */
                        Statistics: string;
                    };
                    /**
                     * Critical级别报警触发条件。
                     */
                    Critical: {
                        /**
                         * Critical级别的阈值比较符。取值：
                         * - GreaterThanOrEqualToThreshold：大于等于。
                         * - GreaterThanThreshold：大于。
                         * - LessThanOrEqualToThreshold：小于等于。
                         * - LessThanThreshold：小于。
                         * - NotEqualToThreshold：不等于。
                         * - GreaterThanYesterday：同比昨天时间上涨。
                         * - LessThanYesterday：同比昨天时间下降。
                         * - GreaterThanLastWeek：同比上周同一时间上涨。
                         * - LessThanLastWeek：同比上周同一时间下降。
                         * - GreaterThanLastPeriod：环比上周期上涨。
                         * - LessThanLastPeriod：环比上周期下降。
                         * @example `GreaterThanOrEqualToThreshold`
                         */
                        ComparisonOperator: string;
                        /**
                         * Critical级别的重试次数。
                         * @example `5`
                         */
                        Times: number;
                        /**
                         * Critical级别的阈值。
                         * @example `90`
                         */
                        Threshold: string;
                        /**
                         * Critical级别的统计方法。
                         * 每个云服务的`Statistics`取值不同。更多信息，请参见[云服务监控项](~~163515~~)。
                         * @example `Average`
                         */
                        Statistics: string;
                    };
                };
                Labels: {
                    /**
                     * 报警模板标签。
                     */
                    Labels: {
                        /**
                         * 报警模板的标签键。
                         * @example `label1`
                         */
                        Key: string;
                        /**
                         * 报警模板的标签值。
                         * @example `value1`
                         */
                        Value: string;
                    }[];
                };
            }[];
        };
    };
}
