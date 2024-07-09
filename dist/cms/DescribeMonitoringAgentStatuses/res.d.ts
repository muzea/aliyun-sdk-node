export interface DescribeMonitoringAgentStatusesResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The specified resource is not found.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6F8371DF-AB81-41B8-9E1B-5493B3FF0E4F`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    NodeStatusList: {
        /**
         * 主机的状态列表。
         */
        NodeStatus: {
            /**
             * 插件的运行状态。取值：
             * - running：运行中。
             * - stopped：已停止。
             * - installing：安装中。
             * - install_faild：安装失败。
             * - abnormal：安装异常。
             * - not_installed：未安装。
             *
             * @example `running`
             */
            Status: string;
            /**
             * 实例ID。
             * @example `i-hp3dunahluwajv6f****`
             */
            InstanceId: string;
            /**
             * 是否开启自动安装插件。取值：
             * - true：开启自动安装插件。
             * - false：关闭自动安装插件。
             * @example `true`
             */
            AutoInstall: boolean;
            /**
             * SysOM的开启状态。取值：
             * - installing：开启中。
             * - running：运行中。
             * - stopped：已停止。
             * - uninstalling：关闭中。
             * @example `running`
             */
            OsMonitorStatus: string;
            /**
             * SysOM的错误状态。取值：
             * - `install_fail`：开启错误或未知错误。
             * - `install_assist_invalid`：云助手状态引起的开启错误。
             * - `install_assist_command_fail`：执行开启命令失败，导致的开启错误。
             * - `uninstall_fail`：关闭错误或未知错误。
             * - `uninstall_assist_invalid`：云助手状态引起的关闭错误。
             * - `uninstall_assist_command_fail`：执行关闭命令失败，导致的开启错误。
             * @example `install_fail`
             */
            OsMonitorErrorCode: string;
            /**
             * 执行错误的详细信息。取值：
             * - `Command.ErrorCode.Fail.Downlaod.REGIN_ID`：获取地域ID失败。
             * - `Command.ErrorCode.Fail.Downlaod.SYSAK`：下载SYSAK RPM失败。
             * - `Command.ErrorCode.Fail.Downlaod.CMON_FILE`：下载CMON文件失败。
             * - `Command.ErrorCode.Fail.Downlaod.BTF`：SYSAK服务启动失败，BTF文件缺失。
             * - `Command.ErrorCode.Fail.Start.SYSAK`：SYSAK服务启动失败（未知原因）。
             * @example `Command.ErrorCode.Fail.Downlaod.REGIN_ID`
             */
            OsMonitorErrorDetail: string;
            /**
             * SysOM监控的插件版本。
             * @example `1.3.0-12`
             */
            OsMonitorVersion: string;
            /**
             * SysOM插件的配置信息`sysak`是否开启监控。取值：
             * - true：`sysak`开启监控。
             * - false：`sysak`未开启监控。
             * @example `{"sysak":true}`
             */
            OsMonitorConfig: string;
            /**
             * 安装云监控插件的错误码。取值：
             * - Common.Timeout：安装超时。
             * - Common.SLR：未授权云监控的ServiceLinkRole。
             * - Common.OS：不支持此操作系统。
             * - Assist.Invalid：云助手未运行。
             * - Assist.Invoke：启动安装程序错误。
             * - Assist.Execute：安装程序执行错误。
             */
            AgentInstallErrorCode: string;
        }[];
    };
}
