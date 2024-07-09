export interface DescribeDBClusterPerformanceResponse {
    PerformanceKeys: {
        /**
         * 集群性能数据列表。
         */
        PerformanceItem: {
            /**
             * 具体的性能指标度量名称。
             * @example `mean_data_size`
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
                     * @example `42.38`
                     */
                    Value: string;
                    /**
                     * 监控指标的具体时间点，格式为时间戳，单位为毫秒。
                     * @example `1600822800000`
                     */
                    Timestamp: number;
                }[];
            };
            /**
             * 数据库集群节点ID。
             * > 当请求参数中`Key`的值设置为`PolarDBDiskUsage`时，不会返回该参数。
             * @example `pi-*************`
             */
            DBNodeId: string;
        }[];
    };
    /**
     * 兼容数据库版本。
     * @example `8.0`
     */
    DBVersion: string;
    /**
     * 查询结束时间。格式：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2020-09-23T01:01:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `35D3E3DA-4650-407A-BFF5-59BFF1******`
     */
    RequestId: string;
    /**
     * 查询开始时间。格式：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2020-09-23T01:00:00Z`
     */
    StartTime: string;
    /**
     * 数据库集群ID。
     * @example `pc-*****************`
     */
    DBClusterId: string;
    /**
     * 兼容数据库类型。
     * @example `MySQL`
     */
    DBType: string;
}
