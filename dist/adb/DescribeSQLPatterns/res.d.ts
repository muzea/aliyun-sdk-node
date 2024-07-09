export interface DescribeSQLPatternsResponse {
    /**
     * 页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * SQL Pattern的详细信息。
     */
    PatternDetails: {
        /**
         * SQL Pattern的具体语句。
         * @example `SELECT * FROM KEPLER_META_NODE_STATIC_INFO WHERE elastic_node = ? OR (elastic_node = ? AND enable = ?)`
         */
        SQLPattern: string;
        /**
         * SQL Pattern的ID。
         * @example `5575924945138******`
         */
        PatternId: string;
        /**
         * 提交Pattern相关的SQL数据库用户名。
         * @example `reporter`
         */
        User: string;
        /**
         * 提交Pattern相关的SQL客户端IP地址。
         * @example `192.168.xx.xx`
         */
        AccessIp: string;
        /**
         * SQL Pattern扫描的列表。
         * @example `tpch.orders`
         */
        Tables: string;
        /**
         * 查询时间范围内，Pattern的最早提交时间。单位：毫秒。
         * @example `2021-11-12 03:06:00`
         */
        PatternCreationTime: string;
        /**
         * 查询时间范围内，Pattern的平均总耗时。单位：毫秒。
         * @example `4`
         */
        AverageQueryTime: number;
        /**
         * 查询时间范围内，Pattern的最大总耗时。单位：毫秒。
         * @example `2341`
         */
        MaxQueryTime: number;
        /**
         * 查询时间范围内，Pattern的平均执行时间。单位：毫秒。
         * @example `234.78`
         */
        AverageExecutionTime: number;
        /**
         * 查询时间范围内，Pattern的最大执行时间。单位：毫秒。
         * @example `2142`
         */
        MaxExecutionTime: number;
        /**
         * 查询时间范围内，Pattern的平均峰值内存。单位：Byte。
         * @example `234.22`
         */
        AveragePeakMemory: number;
        /**
         * Pattern相关SQL的最大峰值内存。单位：Byte。
         * @example `234149`
         */
        MaxPeakMemory: number;
        /**
         * 查询时间范围内，Pattern的平均数据读取量。单位：Byte。
         * @example `234149.23`
         */
        AverageScanSize: number;
        /**
         * Pattern相关SQL的最大数据读取量。单位：Byte。
         * @example `234149`
         */
        MaxScanSize: number;
        /**
         * 查询时间范围内，Pattern的执行次数。
         * @example `345`
         */
        QueryCount: number;
        /**
         * 查询时间范围内，Pattern的失败次数。
         * @example `234`
         */
        FailedCount: number;
        /**
         * 能否拦截当前SQL Pattern的运行。取值说明：
         * * **true**：支持拦截。
         * * **false**：不支持拦截。
         * > 目前AnalyticDB MySQL版仅支持Select和Insert相关语句的拦截。
         * @example `true`
         */
        Blockable: boolean;
    }[];
    /**
     * 请求ID。
     * @example `6BE0EDD1-0DE6-3EB6-81BF-BFE4F2******`
     */
    RequestId: string;
}
