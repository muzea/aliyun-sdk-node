interface PutMonitoringConfigRequest {
    "RegionId"?: string;
    /**
    * 自动为现有的ECS安装插件。
    * @example `true`
    */ "AutoInstall"?: boolean;
    /**
    * 开启新购ECS自动安装云监控插件。
    * @example `true`
    */ "EnableInstallAgentNewECS"?: boolean;
}
export { PutMonitoringConfigRequest };