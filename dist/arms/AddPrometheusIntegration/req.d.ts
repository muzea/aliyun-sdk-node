export interface AddPrometheusIntegrationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * prometheus实例Id。仅支持aliyun-cs、ecs两种类型的实例。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId": string;
    /**
     * 集成类型。
     * @example `kafka、mysql、redis、snmp、emr、nubela、tidb等`
     */
    "IntegrationType": string;
    /**
     * 集成exporter的配置json串。
     * @example `{"port":"5554","name":"kafka-test12","kafka_instance":"kafka-test","__label_value":"kafka-test","scrape_interval":33,"metrics_path":"/metrics","__label_key":"kafka-test"}`
     */
    "Param": string;
}
