export interface DescribeDBInstancePerformanceResponse {
    PerformanceKeys: {
        /**
         * 性能指标信息列表。
         */
        PerformanceKey: {
            /**
             * 性能指标。
             * @example `CpuUsage`
             */
            Key: string;
            /**
             * 性能指标的单位。
             * @example `%`
             */
            Unit: string;
            /**
             * 性能指标值的格式。如果该性能指标包含多个字段，通常以&分隔。
             * 例如查询磁盘空间使用量，返回的**ValueFormat**即为**ins_size&amp;data_size&amp;log_size**。
             * @example `cpu_usage`
             */
            ValueFormat: string;
            PerformanceValues: {
                /**
                 * 性能指标值列表。
                 */
                PerformanceValue: {
                    /**
                     * 性能指标值。
                     * @example `0.23`
                     */
                    Value: string;
                    /**
                     * 性能指标值产生的日期。
                     * @example `2022-06-13T10:58:00Z`
                     */
                    Date: string;
                }[];
            };
        }[];
    };
    /**
     * 查询结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-06-13T11:58Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `4A300BC7-6D8F-527F-A2DB-A7768D26E9AC`
     */
    RequestId: string;
    /**
     * 查询开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2022-06-13T10:58Z`
     */
    StartTime: string;
}
