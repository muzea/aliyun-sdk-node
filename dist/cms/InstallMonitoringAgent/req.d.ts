interface InstallMonitoringAgentRequest {
    "RegionId"?: string;
    "InstanceIds": string[];
    /**
    * 是否强制安装，默认值为强制安装。
    * @example `true`
    */ "Force"?: boolean;
}
export { InstallMonitoringAgentRequest };