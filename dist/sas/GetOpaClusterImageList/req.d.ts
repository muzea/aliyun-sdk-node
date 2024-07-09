export interface GetOpaClusterImageListRequest {
    /**
     * 镜像名称。
     * @example `testImage`
     */
    "ImageName"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c4af4fdf38a98496a9b63c2be5dae****`
     */
    "ClusterId"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为**20**。
     * @example `1`
     */
    "PageSize"?: number;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
     * @example `1`
     */
    "CurrentPage"?: number;
}
