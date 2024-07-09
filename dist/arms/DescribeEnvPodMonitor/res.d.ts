export interface DescribeEnvPodMonitorResponse {
    /**
     * Id of the request
     * @example `1A9C645C-C83F-4C9D-8CCB-29BEC9E1****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
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
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * PodMonitor名称。
         * @example `podMonitor1`
         */
        PodMonitorName: string;
        /**
         * PodMonitor的YAML配置串。
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
