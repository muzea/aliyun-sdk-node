export interface ListPrometheusInstancesRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可选实例类型（若不填则为查询所有类型的实例）：
     * - cloud-product-prometheus （Region级云服务旧版）
     * - ManagedKubernetes （容器服务ACK托管版类型）
     * - satellite （Prometheus for ARMS OpenTelemetry）
     * - Ask （容器服务ACK Serverless集群类型）
     * - remote-write-prometheus （通用实例）
     * - cloud-monitor-cmee （企业云监控）
     * - ExternalKubernetes （容器服务注册集群类型）
     * - vpc-prometheus （Prometheus for ECS）
     * - cloud-monitor-direct （云服务自监控）
     * - Edge Kubernetes （容器服务Edge集群类型）
     * @example `cloud-product-prometheus`
     */
    "ClusterType"?: string;
    /**
     * 是否获取GlobalView聚合实例：
     *    - true：获取
     *    - false：不获取
     * @example `true`
     */
    "ShowGlobalView": boolean;
}
