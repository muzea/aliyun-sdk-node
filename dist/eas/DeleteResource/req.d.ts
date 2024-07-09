export interface DeleteResourceRequest {
    /**
     * 资源组所在的地域ID。例如华东2（上海）为cn-shanghai。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-asdasdasd****`
     */
    "ResourceId": string;
}
