export interface GetClusterAddonInstanceResponse {
    /**
     * 组件实例名称。
     * @example `ack-node-problem-detector`
     */
    name: string;
    /**
     * 组件状态，可能的取值：
     * - active：已安装
     * - updating：变更中
     * - upgrading：升级中
     * - deleting：卸载中
     * @example `active`
     */
    state: string;
    /**
     * 组件实例版本。
     * @example `1.2.16`
     */
    version: string;
    /**
     * 组件自定义参数配置。
     * @example `{"sls_project_name":""}`
     */
    config: string;
    /**
     * 组件日志功能状态。
     */
    logging: {
        /**
         * 组件是否支持开启日志功能。
         * @example `false`
         */
        capable: boolean;
        /**
         * 组件日志功能是否开启。
         * @example `false`
         */
        enabled: boolean;
        /**
         * 组件日志功能使用的日志Project。
         * @example `my-log-project`
         */
        log_project: string;
        /**
         * 组件日志功能使用的日志logstore。
         * @example `my-logstore`
         */
        logstore: string;
    };
}
