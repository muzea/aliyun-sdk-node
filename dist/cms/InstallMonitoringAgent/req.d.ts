export interface InstallMonitoringAgentRequest {
    /**
     * 是否强制安装云监控插件。取值：
     * - true（默认值）：强制安装。
     * - false：不强制安装。
     * @example `true`
     */
    "Force"?: boolean;
    /**
     * 阿里云主机ID。
     * N的取值范围：1~10。
     * > `InstallCommand`和`InstanceIds`必须二选一。
     * @example `i-m5e0k0bexac8tykr****`
     */
    "InstanceIds"?: string[];
    /**
     * 为当前阿里云账号下的所有阿里云主机安装云监控插件。取值：
     * - `onlyInstallNotHasAgent` ： 仅为未安装云监控插件的阿里云主机安装最新版本插件。
     * - `onlyUpgradeAgent`：仅为已安装非最新版本云监控插件的阿里云主机升级插件。
     * - `installAndUpgrade`：不仅为未安装云监控插件的阿里云主机安装最新版本插件，且为已安装非最新版本云监控插件的阿里云主机升级插件。
     * > 如果您已设置该参数，参数`InstanceIds`的设置无效。
     * @example `onlyInstallNotHasAgent`
     */
    "InstallCommand"?: string;
}
