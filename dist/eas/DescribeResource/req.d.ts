export interface DescribeResourceRequest {
    /**
     * 资源组所在的集群ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd`
     */
    "ResourceId": string;
}
