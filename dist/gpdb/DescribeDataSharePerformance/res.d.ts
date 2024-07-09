export interface DescribeDataSharePerformanceResponse {
    /**
     * 查询结束时间。
     * @example `2022-08-03T15:10Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `BBE00C04-A3E8-4114-881D-0480A72CB92E`
     */
    RequestId: string;
    /**
     * 查询开始时间。
     * @example `2022-08-03T15:00Z`
     */
    StartTime: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBClusterId: string;
    /**
     * 数据共享性能参数值列表。
     */
    PerformanceKeys: {
        /**
         * 性能参数名称。
         * @example `adbpg_datashare_topic_count`
         */
        Name: string;
        /**
         * 性能参数的单位。
         * @example `int`
         */
        Unit: string;
        /**
         * 性能参数集合。
         */
        Series: {
            /**
             * 性能参数值列表，由一个或多个值组成。
             */
            Values: {
                /**
                 * 性能参数值。
                 */
                Point: string[];
            }[];
            /**
             * 性能参数名称。
             * @example `adbpg_datashare_topic_count`
             */
            Name: string;
        }[];
    }[];
}
