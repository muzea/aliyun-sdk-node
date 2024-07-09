export interface DescribePatternPerformanceResponse {
    /**
     * 查询结束时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-11-18T18:05Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `210f47011634026610213529******`
     */
    RequestId: string;
    /**
     * 查询开始时间。格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-11-18T00:00Z`
     */
    StartTime: string;
    /**
     * 性能指标列表。
     */
    Performances: {
        /**
         * 查询的性能指标项。取值说明：
         * - **AnalyticDB_PatternQueryCount**：Pattern相关查询的总次数。
         * - **AnalyticDB_PatternQueryTime**：Pattern相关查询的总耗时。
         * - **AnalyticDB_PatternExecutionTime**：Pattern相关查询的执行耗时。
         * - **AnalyticDB_PatternPeakMemory**：Pattern相关查询的峰值内存。
         * - **AnalyticDB_PatternScanSize**：Pattern相关查询的数据读取量。
         * @example `AnalyticDB_PatternQueryCount`
         */
        Key: string;
        /**
         * 性能指标项对应的单位。取值说明：
         * - 当性能指标项为查询时间相关（即`Key`值为`AnalyticDB_PatternQueryTime`或`AnalyticDB_PatternExecutionTime`）时，该返回值为**ms**。
         * - 当性能指标项为峰值内存相关（即`Key`值为`AnalyticDB_PatternPeakMemory`）时，该返回值为**MB**。
         * - 当性能指标项为数据读取量（即`Key`值为`AnalyticDB_PatternScanSize`）时，该返回值为**MB**。
         * - 当性能指标项为查询次数（即`Key`值为`AnalyticDB_PatternQueryCount`）时，该返回值为空。
         * @example `ms`
         */
        Unit: string;
        /**
         * 性能指标项下各性能值的详情。
         */
        Series: {
            /**
             * 性能值列表。
             */
            Values: string[];
            /**
             * 性能值名称。取值说明：
             * - 当`Key`值为`AnalyticDB_PatternQueryCount`时，该参数返回 `pattern_query_count`，即当前Pattern相关SQL的执行次数。
             * - 当`Key`值为`AnalyticDB_PatternQueryTime`时，该参数返回：
             *     -  `average_query_time`，即当前Pattern相关SQL的平均总耗时。
             *     - `max_query_time`，即当前Pattern相关SQL的最大总耗时。
             * - 当`Key`值为`AnalyticDB_PatternExecutionTime`时，该参数返回：
             *     -  `average_execution_time`，即当前Pattern相关SQL的平均执行耗时。
             *     - `max_execution_time`，即当前Pattern相关SQL的最大执行耗时。
             * -  当`Key`值为`AnalyticDB_PatternPeakMemory`时，该参数返回：
             *     - `average_peak_memory`，即当前Pattern相关SQL的平均峰值内存。
             *     - `max_peak_memory`，即当前Pattern相关SQL的最大峰值内存。
             * -  当`Key`值为`AnalyticDB_PatternScanSize`时，该参数返回：
             *     -  `average_scan_size`，即当前Pattern相关SQL的平均读取数据量。
             *     - `max_scan_size`，即当前Pattern相关SQL的最大数据读取量。
             * @example `max_query_time`
             */
            Name: string;
        }[];
    }[];
}
