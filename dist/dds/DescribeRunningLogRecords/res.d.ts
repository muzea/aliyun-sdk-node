export interface DescribeRunningLogRecordsResponse {
    /**
     *  总记录数。
     * @example `2`
     */
    TotalRecordCount: number;
    /**
     * 每页的记录数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 请求ID。
     * @example `45D2B592-DEBA-4347-BBF3-47FF6C97DBBC`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    Items: {
        /**
         * 运行日志明细列表。
         */
        LogRecords: {
            /**
             * 日志连接信息。
             * @example `conn18xxxxxx`
             */
            ConnInfo: string;
            /**
             * 日志生成时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-26T12:09:34Z`
             */
            CreateTime: string;
            /**
             * 日志类别。
             * @example `NETWORK`
             */
            Category: string;
            /**
             * 日志信息。
             * @example ` end connection 11.xxx.xxx.xx:3xxxx (0 connections now open)\n`
             */
            Content: string;
        }[];
    };
    /**
     * 当前数据库的引擎类型。
     * @example `MongoDB`
     */
    Engine: string;
}
