export interface ListEnvServiceMonitorsResponse {
    /**
     * Id of the request
     * @example `1A474FF8-7861-4D00-81B5-5BC3DA4E****`
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
         * ServiceMonitor名称。
         * @example `sm1`
         */
        ServiceMonitorName: string;
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
         * @example `2011-10-11T22:32:11Z`
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
         * @example `1.1.0`
         */
        AddonVersion: string;
        /**
         * 匹配出的service数量。
         * @example `1`
         */
        MatchedServiceCount: number;
        /**
         * ServiceMonitro的端点列表。
         */
        Endpoints: {
            /**
             * 对外端口。
             * @example `9101`
             */
            Port: string;
            /**
             * 目标端口。
             * @example `443`
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
             * servcieMonitor.Endpoint匹配出的target数量。
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
