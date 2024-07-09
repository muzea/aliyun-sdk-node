export interface GetOpaClusterNamespaceListRequest {
    /**
     * 命名空间名称。
     * @example `sit`
     */
    "NameSpaceName"?: string;
    /**
     * 指定要查询的集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `ca0faf43e33904ecbb6c695df7906****`
     */
    "ClusterId"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
