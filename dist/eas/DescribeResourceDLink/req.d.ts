export interface DescribeResourceDLinkRequest {
    /**
     * 资源组所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-adfabas****`
     */
    "ResourceId": string;
}
