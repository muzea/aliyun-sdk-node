export interface DescribeDiagnosisMonitorPerformanceResponse {
    /**
     * 绘制甘特图的查询条数阈值，默认为10000条。
     * > 即使实际的查询条数多于10000条，也只会使用10000条查询绘制甘特图。
     * @example `10000`
     */
    PerformancesThreshold: number;
    /**
     * 当前返回的查询是否为全部查询。返回值说明：
     * - true：当前返回的查询条数是全部查询。
     * - false：后台限制了返回条数，即当前返回的查询不是全部查询。
     * @example `false`
     */
    PerformancesTruncated: boolean;
    /**
     * 请求ID。
     * @example `0F1AC5FD-16E9-5399-B81F-5AC434B1D9F8`
     */
    RequestId: string;
    /**
     * 绘制甘特图的数据列表。
     */
    Performances: {
        /**
         * SQL语句的状态，取值为：
         * - **running**：执行中。
         * - **finished**：已完成。
         * - **failed**：执行失败。
         * @example `running`
         */
        Status: string;
        /**
         * 任务ID。
         * @example `202210311015270330101470300315153****`
         */
        ProcessId: string;
        /**
         * 目标SQL语句的执行开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1669011260000`
         */
        StartTime: number;
        /**
         * 查询的总耗时。单位：毫秒。
         * > 该耗时指标是`QueuedTime`、`TotalPlanningTime`和`ExecutionTime`三个耗时指标的累加值。
         * @example `252`
         */
        Cost: number;
        /**
         * 扫描行数。
         * @example `2345`
         */
        ScanRows: number;
        /**
         * 查询的峰值内存，单位：Byte。
         * @example `123`
         */
        PeakMemory: number;
        /**
         * 执行SQL语句的AnalyticDB MySQL前端节点IP。
         * @example `192.168.XX.XX`
         */
        RcHost: string;
        /**
         * 扫描数据量，单位：Byte。
         * @example `123`
         */
        ScanSize: number;
        /**
         * 提交查询使用的用户名。
         * @example `rpt`
         */
        UserName: string;
    }[];
}
