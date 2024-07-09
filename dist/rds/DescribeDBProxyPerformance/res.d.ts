export interface DescribeDBProxyPerformanceResponse {
    /**
     * 查询结束时间。
     * @example `2019-09-21T18:00:00Z`
     */
    EndTime: string;
    /**
     * 查询开始时间。
     * @example `2019-09-19T01:00:00Z`
     */
    StartTime: string;
    /**
     * 监控实例的ID。
     * @example `lsme****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `DD31056F-A0CE-41D7-AD39-689B6ABAE982`
     */
    RequestId: string;
    /**
     * 内部参数，无需关注。
     * @example `normal`
     */
    DBProxyEngineType: string;
    PerformanceKeys: {
        /**
         * 性能列表。
         */
        PerformanceKey: {
            /**
             * 性能值的格式。
             * @example `docker_container_cpu`
             */
            ValueFormat: string;
            /**
             * 性能参数。
             * @example `cpu_ratio`
             */
            Key: string;
            Values: {
                /**
                 * 性能值列表。
                 */
                PerformanceValue: {
                    /**
                     * 记录日期。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
                     * @example `2019-10-10T09:00:00Z`
                     */
                    Date: string;
                    /**
                     * 性能值。
                     * @example `2.83`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
