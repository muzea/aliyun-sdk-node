export interface ListPrometheusIntegrationResponse {
    /**
     * Id of the request
     * @example `1F1D8840-5330-5804-A8DB-C3C5C5******`
     */
    RequestId: string;
    /**
     * 返回结构体数组。
     */
    Data: {
        /**
         * Prometheus实例ID。
         * @example `c77f6f2397ea74672872acf5e31******`
         */
        ClusterId: string;
        /**
         * 是否展示描述。
         * @example `true`
         */
        ShowDescribe: boolean;
        /**
         * 是否需要升级。
         * @example `true`
         */
        NeedUpgrade: boolean;
        /**
         * Prometheus集成的Exporter实例名。
         * @example `inet`
         */
        InstanceName: string;
        /**
         * 集成Exporter类型。
         * @example `kafka-exporter`
         */
        ExporterType: string;
        /**
         * 集成类型：kafka、mysql、redis、snmp、emr、nubela、tidb等。
         * @example `kafka`
         */
        IntegrationType: string;
        /**
         * Prometheus实例的集成Exporter实例ID。
         * @example `293**`
         */
        InstanceId: number;
        /**
         * 版本信息。
         * @example `1.0.0`
         */
        Version: string;
        /**
         * 监控目标地址。
         * @example `121.40.XX.XX:3342`
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
         * Exporter实例状态。
         * @example `installed`
         */
        Status: string;
        /**
         * 容器名称。
         * @example `container-1`
         */
        ContainerName: string;
        /**
         * 命名空间。
         * @example `arms-prom`
         */
        Namespace: string;
        /**
         * Exporter Pod名。
         * @example `kafka-exporter-1`
         */
        PodName: string;
        /**
         * Exporter描述。
         * @example `"{}"`
         */
        Describe: string;
        /**
         * 是否展示Exporter日志。
         * @example `true`
         */
        ShowLog: boolean;
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
    }[];
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
}
