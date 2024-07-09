export interface GetCloudMetricLogsResponse {
    /**
     * 请求ID。
     * @example `015C2C4D-1884-4EB7-BCD3-C5BB8D7E56DB`
     */
    RequestId: string;
    MetricLogs: {
        /**
         * 性能数据列表。
         */
        MetricLog: {
            /**
             * 日志时间戳。Unix时间戳类型，表示从1970-1-1 00:00:00 UTC计算起的秒数。
             * @example `1583907780`
             */
            Time: number;
            /**
             * 磁盘设备名称。
             * @example `vda1`
             */
            DiskDevice: string;
            /**
             * 网络接口名称。
             * @example `eth1`
             */
            NetworkInterface: string;
            /**
             * JSON序列化字符串，包含多个类别性能指标数值。
             * @example `{\"process|cpusage\":0,\"process|cpuser\":0,\"process|cpusys\":0,******}`
             */
            MetricData: string;
            /**
             * 节点主机名称。
             * @example `compute000`
             */
            Hostname: string;
            /**
             * 节点ID。
             * @example `i-bp132g97g7zwnvta****`
             */
            InstanceId: string;
        }[];
    };
}
