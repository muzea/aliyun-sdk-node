export interface ModifyDBClusterMonitorRequest {
    /**
     * 集群ID。
     * @example `pc-****************`
     */
    "DBClusterId": string;
    /**
     * 监控的采集间隔，取值为**5**或**60**，单位为秒。
     * @example `5`
     */
    "Period": string;
}
