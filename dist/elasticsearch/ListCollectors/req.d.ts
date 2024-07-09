export interface ListCollectorsRequest {
    /**
     * 采集器ID。
     * @example `ct-cn-77uqof2s7rg5c****`
     */
    "resId"?: string;
    /**
     * 采集器名称。
     * @example `collectorName1`
     */
    "name"?: string;
    /**
     * 采集器关联的实例ID。
     * @example `es-cn-nif1q8auz0003****`
     */
    "instanceId"?: string;
    /**
     * 返回结果的分页数。默认值：1，最小值：1，最大值：200。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页的结果数。默认值：20，最小值：1，最大值：500。
     * @example `10`
     */
    "size"?: number;
    /**
     * 指定采集器部署机器的类型，不填返回全部类型。可选值：
     * - ECS：ECS实例
     * - ACK：容器Kubernetes集群
     * @example `ECS`
     */
    "sourceType"?: string;
}
