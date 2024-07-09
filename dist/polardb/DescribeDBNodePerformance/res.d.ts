export interface DescribeDBNodePerformanceResponse {
    PerformanceKeys: {
        /**
         * 集群性能数据列表。
         */
        PerformanceItem: {
            /**
             * 具体的性能指标度量名称。
             * @example `mean_sys_dir_size`
             */
            MetricName: string;
            /**
             * 性能指标。
             * @example `PolarDBDiskUsage`
             */
            Measurement: string;
            Points: {
                /**
                 * 性能数据数组。
                 */
                PerformanceItemValue: {
                    /**
                     * 监控指标数据值。
                     * @example `9.33`
                     */
                    Value: string;
                    /**
                     * 监控指标的具体时间点，格式为Unix时间戳，单位为毫秒（ms）。
                     * @example `1600822800000`
                     */
                    Timestamp: number;
                }[];
            };
        }[];
    };
    /**
     * 兼容数据库版本。
     * @example `8.0`
     */
    DBVersion: string;
    /**
     * 查询结束时间。格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2020-09-23T01:01:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `E2FDB684-751D-424D-98B9-704BEA******`
     */
    RequestId: string;
    /**
     * 查询开始时间。格式为`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2020-09-23T01:00:00Z`
     */
    StartTime: string;
    /**
     * 兼容数据库类型。
     * @example `MySQL`
     */
    DBType: string;
    /**
     * 数据库集群节点ID。
     * @example `pi-*****************`
     */
    DBNodeId: string;
}
