export interface PutMonitoringConfigRequest {
    /**
     * 该参数已废弃，无需关注。
     * @example `true`
     */
    "AutoInstall"?: boolean;
    /**
     * 新购ECS主机是否自动安装云监控插件。取值：
     * - true（默认值）：新购ECS主机自动安装云监控插件。
     * - false：新购ECS主机不自动安装云监控插件。
     * @example `true`
     */
    "EnableInstallAgentNewECS"?: boolean;
}
