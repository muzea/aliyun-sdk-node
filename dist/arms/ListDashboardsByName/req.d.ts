export interface ListDashboardsByNameRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。当ClusterType不为`cloud-product-prometheus`或`cms-enterprise-prometheus`的时候，需要传递ClusterId。
     * @example `cc7a37ee31aea4ed1a059eff8034b****`
     */
    "ClusterId"?: string;
    /**
     * 数据源类型。
     * - loki （Loki数据源）
     * - prometheus （Prometheus数据源）
     * @example `loki`
     */
    "DataSourceType"?: string;
    /**
     * 集群类型。
     * - vpc-prometheus （Prometehus for ECS集群）
     * - cloud-product-prometheus （云服务集群）
     * - cms-enterprise-prometheus （企业云监控服务集群）
     * - ExternalKubernetes （容器服务注册集群）
     * - Ask （Serverless集群）
     * - Kubernetes（容器服务专业版集群）
     * - ManagedKubernetes （容器服务托管版集群）
     * - remote-write-prometheus（Prometheus for Remote Write集群）
     * - GlobalViewV2（Prometheus for GlobalView 集群）
     * @example `cloud-product-prometheus`
     */
    "ClusterType"?: string;
    /**
     * 云服务名称缩写。
     * @example `edas`
     */
    "ProductCode"?: string;
    /**
     * 大盘分组名称。
     * @example `EDAS`
     */
    "GroupName"?: string;
    /**
     * 大盘名称。
     * @example `edas-ingress-url`
     */
    "DashBoardName"?: string;
    /**
     * 大盘版本。
     * @example `latest`
     */
    "DashBoardVersion"?: string;
    /**
     * Grafana大盘是否仅展示在控制台上。
     * @example `true`
     */
    "OnlyQuery"?: boolean;
}
