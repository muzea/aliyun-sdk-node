export interface DescribeDBClusterResourcePoolPerformanceResponse {
    /**
     * 资源池数据监控结束时间，格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-06-10T07:01:00Z`
     */
    EndTime: string;
    /**
     * 请求ID。
     * @example `C7EDB8E4-9769-4233-88C7-DCA4C9******`
     */
    RequestId: string;
    /**
     * 资源池数据监控开始时间，格式：<i>yyyy-MM-ddTHH:mm:ssZ</i>（UTC时间）。
     * @example `2021-06-10T07:00:00`
     */
    StartTime: string;
    /**
     * 集群ID。
     * @example `am-****************`
     */
    DBClusterId: string;
    /**
     * 以监控指标为维度的数据详情列表。
     */
    Performances: {
        /**
         * 资源池数据监控指标。
         * @example `AnalyticDB_RP_CPU`
         */
        Key: string;
        /**
         * 监控指标的单位。
         * @example `%`
         */
        Unit: string;
        /**
         * 以资源池为维度的监控数据列表。
         */
        ResourcePoolPerformances: {
            /**
             * 资源池名称。
             * @example `test_pool`
             */
            ResourcePoolName: string;
            /**
             * 资源池监控数据的序列列表。
             */
            ResourcePoolSeries: {
                /**
                 * 监控指标数值。
                 */
                Values: string[];
                /**
                 * 监控指标名称。
                 * @example `cpu`
                 */
                Name: string;
            }[];
        }[];
    }[];
}
