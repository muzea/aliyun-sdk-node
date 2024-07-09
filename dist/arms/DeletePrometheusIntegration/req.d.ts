export interface DeletePrometheusIntegrationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * prometheus集成类型，如kafka、mysql。
     * @example `kafka、mysql等。`
     */
    "IntegrationType": string;
    /**
     * Prometheus实例集成中心Exporter实例id
     * @example `2875`
     */
    "InstanceId"?: number;
}
