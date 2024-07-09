export interface DescribeEnvServiceMonitorResponse {
    /**
     * Id of the request
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 环境实例ID。
         * @example `env-xxxxx`
         */
        EnvironmentId: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * ServiceMonitor名称。
         * @example `serviceMonitor1`
         */
        ServiceMonitorName: string;
        /**
         * ServiceMonitor的YAML配置串。
         * @example `参见补充说明。`
         */
        ConfigYaml: string;
        /**
         * 状态：
         * - run
         * - stop
         * @example `run`
         */
        Status: string;
    };
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
}
