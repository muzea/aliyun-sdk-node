export interface DescribeRdsPerformanceSummaryResponse {
    /**
     * 当前API是否请求成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `B6876277-ECFD-4658-AC1E-A7FAD8******`
     */
    RequestId: string;
    /**
     * 对象集合。
     */
    RdsPerformanceInfos: {
        /**
         * RDS的CPU使用情况。
         * @example `0.26`
         */
        Cpu: number;
        /**
         * 当前RDS实例活跃会话数量。
         * @example `0`
         */
        ActiveSessions: number;
        /**
         * 当前RDS会话总数量。
         * @example `162`
         */
        TotalSessions: number;
        /**
         * RDS实例ID。
         * @example `rm-**************`
         */
        RdsId: string;
        /**
         * RDS的IOPS数据。
         * @example `17.62`
         */
        Iops: number;
        /**
         * RDS的磁盘使用量，单位为MB。
         * @example `4145144777`
         */
        SpaceUsage: number;
    }[];
}
