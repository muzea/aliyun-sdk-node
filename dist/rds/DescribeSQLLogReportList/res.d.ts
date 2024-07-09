export interface DescribeSQLLogReportListResponse {
    /**
     * 请求ID。
     * @example `08A3B71B-FE08-4B03-974F-CC7EA6DB1828	`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页SQL日志运行报告个数。
     * @example `30`
     */
    PageRecordCount: number;
    /**
     * 总记录数。
     * @example `60`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * SQL日志运行报告列表。
         */
        Item: {
            /**
             * 运行报告生成时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）
             * @example `2019-03-27T16:00:00Z`
             */
            ReportTime: string;
            LatencyTopNItems: {
                /**
                 * 延迟最高的SQL列表。
                 */
                LatencyTopNItem: {
                    /**
                     * SQL语句。
                     * > 展示SQL语句的前128个字符，仅统计执行时间大于100ms的SQL。
                     * @example `SELECT * FROM table_name;`
                     */
                    SQLText: string;
                    /**
                     * SQL执行次数。
                     * @example `5`
                     */
                    SQLExecuteTimes: number;
                    /**
                     * SQL平均执行时间。单位：ms
                     * @example `500`
                     */
                    AvgLatency: number;
                }[];
            };
            QPSTopNItems: {
                /**
                 * 执行次数最多的SQL列表。
                 */
                QPSTopNItem: {
                    /**
                     * SQL执行次数。
                     * @example `5`
                     */
                    SQLExecuteTimes: number;
                    /**
                     * SQL语句。
                     * > 展示SQL语句的前128个字符，仅统计执行时间大于5ms的SQL。
                     * @example `SELECT * FROM table_name;`
                     */
                    SQLText: string;
                }[];
            };
        }[];
    };
}
