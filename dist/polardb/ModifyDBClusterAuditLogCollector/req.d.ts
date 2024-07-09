export interface ModifyDBClusterAuditLogCollectorRequest {
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 开启或关闭SQL采集功能，取值范围如下：
     * - Enable ：开启。
     * - Disabled ：关闭。
     * @example `Enable`
     */
    "CollectorStatus": string;
}
