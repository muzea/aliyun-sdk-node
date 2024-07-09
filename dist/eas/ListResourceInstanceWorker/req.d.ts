export interface ListResourceInstanceWorkerRequest {
    /**
     * 资源组所在的集群ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。资源组ID，如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-adfabas`
     */
    "ResourceId": string;
    /**
     * 资源组的实例名字。如何获取实例名称，请参见[ListResourceInstances](~~412129~~)。该接口返回结果中的HostName即为实例名称。
     * @example `cne10`
     */
    "InstanceName": string;
    /**
     * 工作实例列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的实例数量，默认为100。
     * @example `20`
     */
    "PageSize"?: number;
}
