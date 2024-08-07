export interface ListDashboardsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 阿里云容器服务Kubernetes版的Kubernetes集群的ID。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
    /**
     * 集群类型，包括：ACK、ASK、cloud-product-prometheus和Node。虚拟集群可通过集群类型查询大盘列表。InfluxDB类云产品统一传`cloud-product-prometheus`。
     * @example `Node`
     */
    "ClusterType"?: string;
    /**
     * 指定返回的Grafana大盘的语言，参数值包括en 、 zh ，默认值为en。
     * @example `en`
     */
    "Language"?: string;
    /**
     * 指定大盘标题。大盘标题可能会修改，建议使用**DashboardName**查询。
     * @example `ApiServer`
     */
    "Title"?: string;
    /**
     * 云产品Code，可选。当`clusterType=cloud-product-prometheus`时该字段必传。目前已经接入的云产品有：SAE、MSE、RocketMQ、Lindorm、Kafka、Clickhouse、DLA、消息队列RabbitMQ版、云数据库MongoDB版、时序数据库InfluxDB、MSE服务-云原生网关、Grafana服务、分布式调度平台SchedulerX、MSE服务-全局事务、企业级分布式应用服务EDAS、机器学习平台PAI-EAS、应用高可用服务AHAS、性能测试PTS。
     * @example `xxxx`
     */
    "Product"?: string;
    /**
     * 创建或者查询虚拟集群开关参数，可以对老数据兼容控制。
     * @example `false`
     */
    "RecreateSwitch"?: boolean;
    /**
     * 大盘唯一名称，可筛选查询指定名称的大盘。相对于**Title**参数，**Title**可能会发生变化，name不会。并且支持指定多个name，以半角逗号（,）分隔，例如：`k8s-event,k8s-overview`。同一个大盘名称会有多个版本，如果要指定版本，可以在name后面增加版本信息，例如：`k8s-event:v1,k8s-overview:latest`。
     * @example `k8s-node-overview`
     */
    "DashboardName"?: string;
}
