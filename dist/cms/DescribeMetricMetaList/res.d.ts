export interface DescribeMetricMetaListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `CDE9EAFF-D54E-4024-BBFC-B0AAC883143B`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `10`
     */
    TotalCount: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    Resources: {
        /**
         * 资源中监控项的配置信息。
         */
        Resource: {
            /**
             * 监控项名称。
             * @example `ads.diskSize`
             */
            MetricName: string;
            /**
             * 监控项描述。
             * @example `The rated disk capacity`
             */
            Description: string;
            /**
             * 监控项的标签，是一个或多个JSON字符串。
             * 格式：`[{"name":"标签键","value":"标签值"}]`，`name`可以重复，已有标签说明如下：
             * - metricCategory：监控项分类描述。
             * - alertEnable：是否需要报警。
             * - alertUnit：建议的报警单位。
             * - unitFactor：单位转换系数。
             * - minAlertPeriod：最小报警周期。
             * - productCategory：产品类型分类。
             * @example `[{\"name\":\"minAlertPeriod\",\"value\":\"300\"},{\"name\":\"alertDefault\",\"value\":\"\"},{\"name\":\"unitFactor\",\"value\":\"1\"},{\"name\":\"alertUnit\",\"value\":\"Mbytes\"},{\"name\":\"productCategory\",\"value\":\"ads\"},{\"name\":\"is_alarm\",\"value\":\"true\"},{\"name\":\"metricCategory\",\"value\":\"workerId\"}]`
             */
            Labels: string;
            /**
             * 监控项的单位。
             * @example `MB`
             */
            Unit: string;
            /**
             * 资源的监控维度。多个监控维度之间用半角逗号（,）分隔。
             * @example `userId,instanceId,tableSchema,workerId`
             */
            Dimensions: string;
            /**
             * 云产品的命名空间。
             * @example `acs_ads`
             */
            Namespace: string;
            /**
             * 监控项的所有统计周期。多个统计周期之间用半角逗号（,）分隔。
             * 单位：秒。
             * @example `300`
             */
            Periods: string;
            /**
             * 统计方法。多个统计方法之间用半角逗号（,）分隔。
             * @example `Average,Minimum,Maximum`
             */
            Statistics: string;
        }[];
    };
}
