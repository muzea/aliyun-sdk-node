export interface DescribeErrorLogRecordsResponse {
    /**
     *  总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
    /**
     * 每页的记录数。
     * @example `1`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `68BCBEC2-1E66-471F-A1A8-E3C60C0A80B0`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 错误日志明细列表。
         */
        LogRecords: {
            /**
             * 日志连接信息。
             * @example `conn18xxxxxx`
             */
            ConnInfo: string;
            /**
             * 日志生成时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:</i><i>ss</i>Z（UTC时间）。
             * @example `2019-02-26T12:09:34Z`
             */
            CreateTime: string;
            /**
             * 日志类别。返回值：
             * - NETWORK：网络连接日志。
             * - ACCESS：访问控制日志。
             * - -：普通日志。
             * - COMMAND：慢日志。
             * - SHARDING：集群日志。
             * - STORAGE：存储引擎日志。
             * - CONNPOOL：连接池日志。
             * - ASIO：异步IO日志。
             * - WRITE：慢更新日志。
             * @example `NETWORK`
             */
            Category: string;
            /**
             * 日志信息。
             * @example `xxxxxxxx`
             */
            Content: string;
            /**
             * 日志ID。
             * @example `1111111111`
             */
            Id: number;
        }[];
    };
    /**
     * 当前数据库的引擎类型。
     * @example `MongoDB`
     */
    Engine: string;
}
