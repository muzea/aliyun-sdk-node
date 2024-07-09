export interface ListImageRiskRequest {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c80f79959fd724a888e1187779b13****`
     */
    "ClusterId"?: string;
    /**
     * 镜像命名空间。
     * @example `kube-sy****`
     */
    "Namespace"?: string;
    /**
     * 应用名称。
     * @example `e****`
     */
    "AppName"?: string;
    /**
     * 镜像名称。
     * @example `container-***:****`
     */
    "ImageName"?: string;
}
