export interface DescribeLogMonitorAttributeResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。当请求成功时，返回成功信息；当请求失败时，返回失败原因。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C6718537-E673-4A58-8EE1-24B8B38C7AAE`
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
     * 日志监控详情。
     */
    LogMonitor: {
        /**
         * 日志筛选的过滤条件。需要和ValueFilter配合使用。取值：
         * - and：和。
         * - or：或。
         * @example `and`
         */
        ValueFilterRelation: string;
        /**
         * 日志服务名称。
         * @example `test-logstore`
         */
        SlsLogstore: string;
        /**
         * 监控项名称。详情请参见[云产品监控项](~~163515~~)。
         * @example `cpu_total`
         */
        MetricName: string;
        /**
         * 应用分组ID。
         * @example `12345`
         */
        GroupId: number;
        /**
         * 日志ID。
         * @example `1234`
         */
        LogId: number;
        /**
         * 扩展字段。扩展字段为统计方法中的结果提供四则运算功能。
         * 例如：在统计方法中已配置HTTP状态码请求总数TotalNumber，HTTP状态码大于499的请求数5XXNumber，则可以通过扩展字段计算出服务端错误率：5XXNumber/TotalNumber*100。
         * @example `{"extend":{"errorPercent":"5XXNumber/TotalNumber*100"}}`
         */
        MetricExpress: string;
        /**
         * 日志服务所在的地域ID。
         * @example `cn-hangzhou`
         */
        SlsRegionId: string;
        /**
         * 创建时间。
         * 格式为Unix时间戳，即从1970年1月1日开始所经过的秒数。
         * @example `1547431398000`
         */
        GmtCreate: number;
        /**
         * 日志Project。
         * @example `test-project`
         */
        SlsProject: string;
        /**
         * 聚合计算定义。
         */
        Aggregates: {
            /**
             * 最大值。
             * @example `10`
             */
            Max: string;
            /**
             * 最小值。
             * @example `0`
             */
            Min: string;
            /**
             * 统计方法，即在统计周期内计算日志数据的函数方法。取值：
             * - count：计数值。
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
             * 字段别名。
             * @example `HostName`
             */
            Alias: string;
            /**
             * 日志中原始的字段名称。
             * @example `hostName`
             */
            FieldName: string;
        }[];
        /**
         * 筛选的过滤规则，配合ValueFilterRelation使用。相当于SQL中的Where条件。
         * 如果不填写，则表示对全部数据进行处理。例如：日志中有Level和Error字段，如果需要统计每分钟Error出现的次数，则统计方法可以定义为对Level求和，并且Level=Error。
         */
        ValueFilter: {
            /**
             * 日志匹配的字段名。
             * @example `hostName`
             */
            Key: string;
            /**
             * 日志匹配的字段值。
             * @example `portal`
             */
            Value: string;
            /**
             * 字段值的匹配方式。取值：
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
        Tumblingwindows: string[];
        Groupbys: string[];
    };
}
