export interface PutLogMonitorRequest {
    /**
     * 日志监控ID。
     * @example `16****`
     */
    "LogId"?: string;
    /**
     * 日志服务中日志项目（Project）所在地域。
     * @example `cn-hangzhou`
     */
    "SlsRegionId": string;
    /**
     * 日志服务中日志项目的名称。
     * @example `test-project`
     */
    "SlsProject": string;
    /**
     * 日志服务中日志库的名称。
     * @example `test-logstore`
     */
    "SlsLogstore": string;
    /**
     * 监控项名称。关于云监控支持云服务的监控项，请参见[云产品监控项](~~163515~~)。
     * @example `cpu_total`
     */
    "MetricName": string;
    /**
     * 扩展字段。 扩展字段为统计方法中的结果提供四则运算的功能。
     * 例如：在统计方法中配置了HTTP状态码请求总数TotalNumber和HTTP状态码大于499的请求数5xxNumber，则可以通过扩展字段计算出服务端的错误率：5xxNumber/TotalNumber*100。
     * JSON格式：{"extend":{"errorPercent":"5xxNumber/TotalNumber*100"}}。字段说明如下：
     * - extend：必填字段。
     * - errorPercent：计算结果生成新字段的别名，您可以根据真实情况自行命名。
     * - errorPercent：现有字段的计算表达式。
     * @example `{"extend":{"errorPercent":"5XXNumber/TotalNumber*100"}}`
     */
    "MetricExpress"?: string;
    /**
     * 应用分组ID。
     * @example `7301****`
     */
    "GroupId"?: string;
    /**
     * 日志筛选的过滤条件。取值：
     * - and：和。
     * - or：或。
     * > 本参数需要与`ValueFilter.N.Key`配合使用。
     * @example `and`
     */
    "ValueFilterRelation": string;
    /**
     * 预计算窗口时间。单位：秒。云监控将在定义的预计算时间对数据做一次聚合计算。
     * @example `60,300`
     */
    "Tumblingwindows"?: string;
    /**
     * 单位。
     * @example `Percent`
     */
    "Unit"?: string;
    /**
     * 聚合计算定义。
     */
    "Aggregates": {
        /**
         * 聚合计算原始的字段名称。N的取值范围：1~10。
         * @example `sourceCount`
         */
        FieldName: string;
        /**
         * 在计算周期内根据选定的统计方法对日志数据进行聚合处理。N的取值范围：1~10。取值：
         * - count：计数。
         * - sum：求和。
         * - avg：平均值。
         * - max：最大值。
         * - min：最小值。
         * - countps：计算统计周期内指定字段求count后的每秒平均值。
         * - sumps：计算统计周期内指定字段求sum后的每秒平均值。
         * - distinct：去重后计算统计周期内指定字段出现的次数。
         * @example `count`
         */
        Function: string;
        /**
         * 聚合计算别名。N的取值范围：1~10。
         * @example `Count`
         */
        Alias: string;
    }[];
    /**
     * 对数据进行空间维度聚合。相当于SQL中的Group By，根据指定的维度，对监控数据进行分组。如果Group By不选择任何维度，则根据聚合方法对全部监控数据进行聚合。
     */
    "Groupbys"?: {
        /**
         * GroupBy字段名称。N的取值范围：1~10。
         * @example `cpu`
         */
        FieldName: string;
        /**
         * GroupBy别名。N的取值范围：1~10。
         * @example `CPUUtilization`
         */
        Alias: string;
    }[];
    /**
     * 筛选的过滤规则，配合ValueFilterRelation使用。相当于SQL中的Where条件。如果不填写，则表示对全部数据进行处理。例如：日志中有Level和Error字段，如果需要统计每分钟Error出现的次数，则统计方法可以定义为对Level求和，并且Level=Error。
     */
    "ValueFilter"?: {
        /**
         * 日志匹配的字段名名称。N的取值范围：1~10。
         * @example `lh_source`
         */
        Key: string;
        /**
         * 日志匹配的字段值。N的取值范围：1~10。
         * @example `test`
         */
        Value: string;
        /**
         * 字段值的匹配方式。N的取值范围：1~10。取值：
         * - `contain`：包含。
         * - `notContain`：不包含。
         * - `>`：大于。
         * - `<`：小于。
         * - `>=`：大于等于。
         * - `<=`：小于等于。
         * @example `contain`
         */
        Operator: string;
    }[];
}
