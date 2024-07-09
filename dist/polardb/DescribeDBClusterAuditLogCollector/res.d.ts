export interface DescribeDBClusterAuditLogCollectorResponse {
    /**
     * SQL采集功能的状态，取值范围如下：
     * * Enable：开启。
     * * Disabled：关闭。
     * @example `Disabled`
     */
    CollectorStatus: string;
    /**
     * 请求ID。
     * @example `59011D2B-2A38-4207-A86C-72BC1F882D19`
     */
    RequestId: string;
}
