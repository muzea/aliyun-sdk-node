export interface GetOpaClusterLabelListRequest {
    /**
     * 标签名称。
     * @example `test`
     */
    "TagName"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
     * @example `c556c8133b5ad4378b7fc533ddbda****`
     */
    "ClusterId"?: string;
    /**
     * 分页查询时，每页显示的数据最大条数。每页默认显示的数据条数为200条，pagesize参数值为空时，将默认返回200条数据，最大值为200。
     * >建议pagesize取值不要为空。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
