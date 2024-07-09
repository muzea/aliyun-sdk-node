export interface GetPrometheusIntegrationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs和ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 集成类型：kafka、mysql、redis、snmp、emr、nubela、tidb等。
     * @example `tidb`
     */
    "IntegrationType": string;
    /**
     * Prometheus实例集成中心Exporter实例ID。
     * @example `28**`
     */
    "InstanceId": number;
}
