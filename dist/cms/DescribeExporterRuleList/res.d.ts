export interface DescribeExporterRuleListResponse {
    /**
     * 请求ID。
     * @example `6BA047CA-8BC6-40BC-BC8F-FBECF35F1993`
     */
    RequestId: string;
    /**
     * 是否成功，取值：
     * - `true`：成功
     * - `false`：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * > 状态码为200表示成功，其余取值表示失败。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `susscess`
     */
    Message: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `1000`
     */
    Total: number;
    Datapoints: {
        /**
         * 输出的规则列表。
         */
        Datapoint: {
            /**
             * 监控项名称。
             * >详情请参见[DescribeMetricMetaList](~~98846~~)或[预设监控项参考](~~28619~~)。
             * @example `cpu_total`
             */
            MetricName: string;
            /**
             * 规则描述信息。
             * @example `监控数据导出`
             */
            Describe: string;
            /**
             * 导出数据的时间窗口。
             * 如果要导出多个窗口，使用逗号分隔。
             * > 不支持小于60秒数据的导出。
             * @example `60,300`
             */
            TargetWindows: string;
            /**
             * 创建的时间， 为unix时间戳。
             * @example `1584024616228`
             */
            CreateTime: number;
            /**
             * 是否启用。
             * @example `true`
             */
            Enabled: boolean;
            /**
             * 关联的维度。
             * @example `{"instanceId":"xxxxx"}`
             */
            Dimension: string;
            /**
             * 产品的数据命名空间。
             * >详情请参见[DescribeMetricMetaList](~~98846~~)或[预设监控项参考](~~28619~~)。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 导出规则名。
             * @example `myRuleName`
             */
            RuleName: string;
            DstName: {
                DstName: string[];
            };
        }[];
    };
}
