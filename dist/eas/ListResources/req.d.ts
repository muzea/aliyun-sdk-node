export interface ListResourcesRequest {
    /**
     * 专属资源组列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的专属资源组数量，默认为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 资源组名称。[CreateResource](~~412111~~)会返回资源组名称。
     * @example `MyResource`
     */
    "ResourceName"?: string;
    /**
     * 资源组ID。[CreateResource](~~412111~~)会返回资源组ID。
     * @example `eas-r-h7lcw24dyqztwxxxxxx`
     */
    "ResourceId"?: string;
    /**
     * 资源组类型，取值如下：
     * - Dedicated：专属资源组
     * - SelfManaged：自运维资源组
     * @example `Dedicated`
     */
    "ResourceType"?: string;
}
