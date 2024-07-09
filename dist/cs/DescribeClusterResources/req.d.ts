export interface DescribeClusterResourcesRequest {
    /**
     * 集群ID。
     * 关于如何查看集群ID，请参见[查看集群信息](~~89446~~)。
     * 您也可通过API接口[DescribeClustersV1](~~183905~~)，查看阿里云账号下所有创建的集群信息。
     * @example `cb95aa626a47740afbf6aa099b65****`
     */
    "ClusterId": string;
    /**
     * 是否同时查询集群组件创建的资源。
     */
    "with_addon_resources"?: boolean;
}
