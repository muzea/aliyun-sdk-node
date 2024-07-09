export interface DescribeContainerStatisticsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `21DA46CA-2DCE-4FF6-907D-D5DBBB7518C8`
     */
    RequestId: string;
    /**
     * 容器资产告警的详细统计数据。
     */
    Data: {
        /**
         * 当前容器集群总节点个数。
         * @example `12`
         */
        TotalNode: number;
        /**
         * 风险级别为**提醒**的告警个数。
         * @example `1`
         */
        RemindAlarmCount: number;
        /**
         * 当前容器集群的安全告警总数。
         * @example `6`
         */
        TotalAlarmCount: number;
        /**
         * 风险级别为**可疑**的告警个数。
         * @example `3`
         */
        SuspiciousAlarmCount: number;
        /**
         * 风险级别为**紧急**的告警个数。
         * @example `2`
         */
        SeriousAlarmCount: number;
        /**
         * 当前容器集群中存在告警的节点个数。
         * @example `4`
         */
        hasRiskNode: number;
    };
}
