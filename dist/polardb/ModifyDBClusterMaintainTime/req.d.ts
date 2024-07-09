export interface ModifyDBClusterMaintainTimeRequest {
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 集群的可维护时间，格式为`HH:mmZ- HH:mmZ`。例如`16:00Z-17:00Z`，表示0点到1点（UTC+08:00）可进行例行维护。
     * > 可维护时间为整点，时长为1小时。
     * @example `02:00Z-03:00Z`
     */
    "MaintainTime": string;
}
