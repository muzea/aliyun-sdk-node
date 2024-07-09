export interface ListPrometheusMonitoringResponse {
    /**
     * Id of the request
     * @example `D80ADAAC-8C32-5479-BD14-C28CF832****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Prometheus实例ID。
         * @example `c589a1b8db05c4561aefbb898ca8fb1cf`
         */
        ClusterId: string;
        /**
         * 监控配置名称。
         * @example `podMonitor1`
         */
        MonitoringName: string;
        /**
         * 监控配置类型。
         * @example `podMonitor`
         */
        Type: string;
        /**
         * 监控配置yaml串。
         * @example `参见返回参数补充说明。`
         */
        ConfigYaml: string;
        /**
         * 监控配置状态。
         * @example `run`
         */
        Status: string;
    }[];
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
}
