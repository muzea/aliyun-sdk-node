export interface UpdatePrometheusIntegrationRequest {
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
     * 集成Exporter的配置json串。
     * @example `{
          "port": "5554",
          "name": "kafka-test12",
          "kafka_instance": "kafka-test",
          "__label_value": "kafka-test",
          "scrape_interval": 33,
          "metrics_path": "/metrics",
          "__label_key": "kafka-test"
    }`
     */
    "Param": string;
    /**
     * 集成中心Exporter实例ID。
     * @example `2893`
     */
    "InstanceId"?: number;
    /**
     * 集成类型。
     * @example `kafka、mysql、redis、snmp、emr、nubela、tidb等。`
     */
    "IntegrationType": string;
}
