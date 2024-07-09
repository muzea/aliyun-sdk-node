export interface TagResourcesRequest {
    /**
     * 应用的PID或实例ID，最多填写50个。
     */
    "ResourceId": string[];
    /**
     * 标签列表，最多20个。
     */
    "Tag": {
        /**
         * 标签键。
         * @example `Key1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `Test1`
         */
        Value: string;
    }[];
    /**
     * 需要修改标签的ARMS资源类型。
     * - WEB-前端监控
     * - APPLICATION-应用监控
     * - PROMETHEUS-可观测监控 Prometheus 版
     * - SYNTHETICTASK-云拨测
     * - ALERTRULE-应用监控告警
     * - PROMETHEUSALERTRULE-可观测监控 Prometheus 版告警
     * - XTRACEAPP - 可观测链路 OpenTelemetry 版应用
     * @example `APPLICATION`
     */
    "ResourceType": string;
}
