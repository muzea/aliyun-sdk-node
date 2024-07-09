export interface DescribeCloudMonitorAgentStatusesResponse {
    /**
     * 请求ID。
     * @example `30637AD6-D977-4833-A54C-CC89483E1FEE`
     */
    RequestId: string;
    /**
     * 对象。
     */
    InstanceStatusList: {
        /**
         * 插件的运行状态。取值：
         * - running：运行中。
         * - stopped：已停止。
         * - installing：安装中。
         * - install_faild：安装失败。
         * - abnormal：安装异常。
         * - not_installed：未安装。
         * @example `running`
         */
        Status: string;
        /**
         * 轻量应用服务器实例ID。
         * @example `c854dc6f07e74953830bb5808d0****`
         */
        InstanceId: string;
        /**
         * 是否自动安装云监控插件。取值：
         * - true。
         * - false。
         * @example `true`
         */
        AutoInstall: boolean;
    }[];
}
