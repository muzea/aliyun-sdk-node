export interface ListDefaultCollectorConfigurationsRequest {
    /**
     * 采集器类型。可选值：
     * - fileBeat
     * - metricBeat
     * - heartBeat
     * - auditBeat
     * @example `fileBeat`
     */
    "resType": string;
    /**
     * 采集器版本。采集器部署的机器类型不同，可选的版本也不同，具体说明如下：
     * - ECS：6.8.5_with_community
     * - ACK：6.8.13_with_community
     * @example `6.8.5_with_community`
     */
    "resVersion": string;
    /**
     * 指定采集器部署机器的类型，不填则返回全部。可选值：
     * - ECS：ECS服务器
     * - ACK：容器Kubernetes集群
     * @example `ECS`
     */
    "sourceType"?: string;
}
