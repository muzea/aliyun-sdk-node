export interface DescribeLogMonitorListResponse {
    /**
     * 请求ID。
     * @example `01E90080-4300-4FAA-B9AE-161956BC350D`
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
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `15`
     */
    Total: number;
    /**
     * 日志监控列表。
     */
    LogMonitorList: {
        /**
         * 日志筛选的过滤条件。需要和ValueFilter配合使用。取值：
         * - and：表示和的关系。
         * - or ：表示或的关系。
         * @example `and`
         */
        ValueFilterRelation: string;
        /**
         * 日志服务名称。
         * @example `testSlS****`
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
         * 日志监控ID。
         * @example `12345`
         */
        LogId: number;
        /**
         * 日志服务所在的地域ID。
         * @example `cn-hangzhou`
         */
        SlsRegionId: string;
        /**
         * 创建时间。
         * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
         * @example `1577766395000`
         */
        GmtCreate: number;
        /**
         * 日志Project。
         * @example `sls-project-test****`
         */
        SlsProject: string;
        /**
         * 筛选的过滤规则，配合ValueFilterRelation使用。相当于SQL中的Where条件。
         * 如果不填写，则表示对全部数据进行处理。例如：日志中有Level和Error字段，如果需要统计每分钟Error出现的次数，则统计方法可以定义为对Level求和，并且Level=Error。
         */
        ValueFilter: {
            /**
             * 日志匹配的字段名称。
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
             * - contain：包含。
             * - notContain：不包含。
             * - `>`：大于。
             * -  `<`：小于。
             * - `>=`：大于等于。
             * - `<=`：小于等于。
             * @example `contain`
             */
            Operator: string;
        }[];
    }[];
}
