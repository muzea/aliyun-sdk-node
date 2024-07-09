export interface AddPrometheusRemoteWriteRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Prometheus实例ID。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b**** 或 vpc-xxxxx`
     */
    "ClusterId": string;
    /**
     * Prometheus Remote Write配置（yaml格式）。
     * @example `参见请求参数补充说明。`
     */
    "RemoteWriteYaml": string;
}
