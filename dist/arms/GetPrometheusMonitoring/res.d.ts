export interface GetPrometheusMonitoringResponse {
    /**
     * Id of the request
     * @example `78901766-3806-4E96-8E47-CFEF59E4****`
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
         * @example `customJob1`
         */
        MonitoringName: string;
        /**
         * 监控配置类型：serviceMonitor、podMonitor、customJob、probe。
         * @example `serviceMonitor`
         */
        Type: string;
        /**
         * 监控配置状态：run, stop。
         * @example `run`
         */
        Status: string;
        /**
         * 监控配置yaml串。
         * @example `参见返回参数补充说明。`
         */
        ConfigYaml: string;
    };
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
