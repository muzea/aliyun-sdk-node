export interface DescribeDBClusterPerformanceResponse {
    /**
     * 实例性能参数值列表。
     */
    PerformanceKeys: {
        /**
         * 监控指标的单位。
         * @example `%`
         */
        Unit: string;
        /**
         * 性能参数集合。
         */
        Series: {
            /**
             * 性能参数值，每个值对应一个采集时间点。
             */
            Values: {
                /**
                 * 性能参数值。
                 */
                Point: string[];
            }[];
            /**
             * 节点的角色，取值说明：
             * - **master**：主节点。
             * - **standby**：备节点。
             * - **segment**：计算节点。
             * @example `standby`
             */
            Role: string;
            /**
             * 计算节点或计算组名称。
             * @example `standby-********-cpu`
             */
            Name: string;
        }[];
        /**
         * 性能参数名称，具体信息，请参见[性能参数表](~~86943~~)。
         * @example `adbpg_group_cpu_used_percent`
         */
        Name: string;
    }[];
    /**
     * 查询结束时间（UTC时间），格式为`YYYY-MM-DDTHH:mmZ`。
     * @example `2021-11-03T15:10Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `8E8990F0-C81E-4C94-8F51-5F**********`
     */
    RequestId: string;
    /**
     * 查询开始时间（UTC时间），格式为`YYYY-MM-DDTHH:mmZ`。
     * @example `2021-11-03T15:00Z`
     */
    StartTime: string;
    /**
     * 实例ID。
     * @example `gp-bp12ga6v69h86****`
     */
    DBClusterId: string;
}
