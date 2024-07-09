export interface ListPrometheusIntegrationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs和ecs两种类型的实例。
     * @example `c77f6f2397ea74672872acf5e31******`
     */
    "ClusterId": string;
    /**
     * 集成类型：kafka、mysql、redis、snmp、emr、nubela、tidb等。
     * @example `kafka`
     */
    "IntegrationType": string;
}
