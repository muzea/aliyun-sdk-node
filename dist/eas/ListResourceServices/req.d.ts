export interface ListResourceServicesRequest {
    /**
     * 资源组所在的集群ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。资源组ID，如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `iot`
     */
    "ResourceId": string;
    /**
     * 服务列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的服务数量，默认为100。
     * @example `20`
     */
    "PageSize"?: number;
}
