export interface UpdateClusterRequest {
    /**
     * 扩展请求参数，JSON格式。
     * @example `{}`
     */
    "RequestPars"?: string;
    /**
     * 集群别名。
     * @example `cluster-1`
     */
    "ClusterAliasName"?: string;
    /**
     * 实例ID。
     * @example `mse-cn-78v1l83****`
     */
    "InstanceId"?: string;
    /**
     * 运维窗口开始时间
     * @example `02:00`
     */
    "MaintenanceStartTime"?: string;
    /**
     * 运维窗口结束时间
     * @example `06:00`
     */
    "MaintenanceEndTime"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
