export interface DescribeResubmitConfigResponse {
    /**
     * 请求ID。
     * @example `8D217417-BBA7-566C-9B9D-FFCBC86112B0`
     */
    RequestId: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * > 您可以调用[DescribeDBClusters](~~129857~~)接口查询目标地域中所有AnalyticDB MySQL数仓版（3.0）集群的集群ID。
     * @example `am-8vbyw9awuj141haf9`
     */
    DBClusterId: string;
    /**
     * 规则列表。
     */
    Rules: {
        /**
         * 峰值内存。
         * @example `32`
         */
        PeakMemory: string;
        /**
         * SQL语句执行时长，单位：毫秒（ms）。
         * @example `300`
         */
        QueryTime: string;
        /**
         * 目标资源组名称。
         * @example `test_target_group`
         */
        TargetGroupName: string;
        /**
         * 是否配置内存溢出异常。
         * @example `false`
         */
        ExceedMemoryException: boolean;
        /**
         * 源资源组名称。
         * @example `test_group`
         */
        GroupName: string;
    }[];
}
