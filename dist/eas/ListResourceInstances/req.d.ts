export interface ListResourceInstancesRequest {
    /**
     * 资源组所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `iot`
     */
    "ResourceId": string;
    /**
     * 过滤机器付费类型，取值如下：
     * - PrePaid：预付费。
     * - PostPaid：后付费。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 专属资源组机器列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的机器数量，默认为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 按实例名称过滤。
     * @example `e-xxxx***`
     */
    "InstanceName"?: string;
    /**
     * 按实例ID过滤。如何获取实例ID，请参见[ListResourceInstances](~~412129~~)。
     * @example `i-bp1jd6x3uots****a`
     */
    "InstanceId"?: string;
    /**
     * 机器IP。
     * @example `10.224.xx.xx`
     */
    "InstanceIP"?: string;
    /**
     * 关键字搜索。支持按机器ID或IP进行搜索。
     * @example `10.224.xx.xx`
     */
    "Filter"?: string;
    /**
     * 机器状态。
     * @example `Ready`
     */
    "InstanceStatus"?: string;
    /**
     * 排序字段。
     * @example `CreateTime`
     */
    "Sort"?: string;
    /**
     * 排序顺序。
     * @example `desc`
     */
    "Order"?: string;
}
