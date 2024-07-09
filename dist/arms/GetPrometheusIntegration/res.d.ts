export interface GetPrometheusIntegrationResponse {
    /**
     * Id of the request
     * @example `9BEF2832-9D95-5E3E-9B10-74887C******`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * Prometheus实例ID。
         * @example `cc7a37ee31aea4ed1a059eff8034b****`
         */
        ClusterId: string;
        /**
         * Prometheus实例的集成Exporter实例ID。
         * @example `28**`
         */
        InstanceId: number;
        /**
         * 是否展示描述。
         * @example `true`
         */
        ShowDescribe: boolean;
        /**
         * 是否需要升级。
         * @example `True`
         */
        NeedUpgrade: boolean;
        /**
         * Prometheus集成的Exporter实例名。
         * @example `lpd-skyeye`
         */
        InstanceName: string;
        /**
         * 集成类型：kafka、mysql、redis、snmp、emr、nubela、tidb等。
         * @example `tidb`
         */
        IntegrationType: string;
        /**
         * 集成Exporter类型。
         * @example `tidb-exporter`
         */
        ExporterType: string;
        /**
         * 版本信息。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 监控目标地址。
         * @example `127.0.XX.XX:3422`
         */
        Target: string;
        /**
         * 是否能删除。
         * @example `true`
         */
        CanDelete: boolean;
        /**
         * 是否可以编辑。
         * @example `true`
         */
        CanEditor: boolean;
        /**
         * Exporter状态
         * @example `installed`
         */
        Status: string;
        /**
         * Exporter描述。
         * @example `"{}"`
         */
        Describe: string;
        /**
         * 是否展示Exporter日志。
         * @example `true`
         */
        ShowLog: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * 容器名称。
         * @example `kafka-exporter-1`
         */
        ContainerName: string;
        /**
         * Exporter配置参数JSON串。
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
        Param: string;
    };
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `message`
     */
    Message: string;
}
