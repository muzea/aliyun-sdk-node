export interface ListCriteriaStrategyRequest {
    /**
     * 集群编号。
     * > 您可通过调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口查询该值。
     * @example `c4af4fdf38a98496a9b63c2be5dae****`
     */
    "ClusterId"?: string;
    /**
     * 容器主动防御规则名称。
     * @example `test`
     */
    "StrategyName"?: string;
    /**
     * 集群命名空间。
     * > 您可通过调用[GetOpaClusterNamespaceList](~~GetOpaClusterNamespaceList~~)接口查询该值。
     * @example `test`
     */
    "Namespace"?: string;
    /**
     * 镜像名称。
     * > 您可通过调用[GetOpaClusterImageList](~~GetOpaClusterImageList~~)接口查询该值。
     * @example `testImage`
     */
    "ImageName"?: string;
    /**
     * 容器标签。
     * > 您可通过调用[GetOpaClusterLabelList](~~GetOpaClusterLabelList~~)接口查询该值。
     * @example `testlabel`
     */
    "Label"?: string;
}
