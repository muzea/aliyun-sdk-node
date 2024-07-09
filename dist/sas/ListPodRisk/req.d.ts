export interface ListPodRiskRequest {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询，每页几条，默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
     * @example `c314aa5b2f208461dad821cdfed82****`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `taas`
     */
    "Namespace"?: string;
    /**
     * 应用名称。
     * @example `nginx1`
     */
    "AppName"?: string;
    /**
     * Pod名称。
     * @example `abcd-84898334227-p****`
     */
    "PodName"?: string;
}
