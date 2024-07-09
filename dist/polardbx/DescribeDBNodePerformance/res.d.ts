export interface DescribeDBNodePerformanceResponse {
    /**
     * 查询结束时间, 格式： YYYY-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-10-20T02:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间, 格式： YYYY-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2021-10-20T00:00Z`
     */
    StartTime: string;
    /**
     * 实例名称。
     * @example `pxc-********`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `EFB5E10B-5268-170F-A378-9AF86CCEACC8`
     */
    RequestId: string;
    PerformanceKeys: {
        /**
         * 性能数据列表。
         */
        PerformanceItem: {
            /**
             * 具体的性能指标度量名称。
             * @example `logic_tps`
             */
            MetricName: string;
            /**
             * 节点名称。
             * @example `pxc-i-********`
             */
            DBNodeId: string;
            /**
             * 性能指标。
             * @example `Logic_TPS`
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
        }[];
    };
}
