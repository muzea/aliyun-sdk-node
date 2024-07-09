export interface ListEnvPodMonitorsResponse {
    /**
     * Id of the request
     * @example `4C518054-852F-4023-ABC1-4AF95FF7****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果信息。
     */
    Data: {
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 环境ID。
         * @example `env-xxxxx`
         */
        EnvironmentId: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * PodMonitor名称。
         * @example `pm1`
         */
        PodMonitorName: string;
        /**
         * yaml配置串。
         * @example `参见补充说明。`
         */
        ConfigYaml: string;
        /**
         * 状态。
         * @example `run`
         */
        Status: string;
        /**
         * 创建时间（时间戳）。
         * @example `2011-01-02T11:34:22Z`
         */
        CreationTimestamp: string;
        /**
         * 归属的组件名。
         * @example `mysql`
         */
        AddonName: string;
        /**
         * 归属的组件实例名。
         * @example `mysql1`
         */
        AddonReleaseName: string;
        /**
         * 归属的组件版本。
         * @example `1.0.5`
         */
        AddonVersion: string;
        /**
         * podmonitor的端点列表。
         */
        Endpoints: {
            /**
             * 对外端口。
             * @example `9182`
             */
            Port: string;
            /**
             * 目标端口。
             * @example `3306`
             */
            TargetPort: number;
            /**
             * 采集路径。
             * @example `/metrics`
             */
            Path: string;
            /**
             * 采集时间间隔。
             * @example `30s`
             */
            Interval: string;
            /**
             * PodMonitor.Endpoint匹配出的target（即pod）数量。
             * @example `1`
             */
            MatchedTargetCount: number;
        }[];
    }[];
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
