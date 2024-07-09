export interface DescribeContainerTagsRequest {
    /**
     * 检索字段。取值：
     * - **namespace**：命名空间
     * - **appName**：应用名称
     * - **image**：镜像
     * - **tag**：标签
     * @example `namespace`
     */
    "FieldName": string;
    /**
     * 检索字段对应值。
     * @example `demo4`
     */
    "FieldValue"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为200。
     * @example `200`
     */
    "PageSize": number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c22143730ab6e40b09ec7c1c51d4d****`
     */
    "ClusterId"?: string;
    /**
     * 命名空间。
     * @example `test-name-01`
     */
    "Namespace"?: string;
    /**
     * 应用名称。
     * @example `node-exporter`
     */
    "AppName"?: string;
}
