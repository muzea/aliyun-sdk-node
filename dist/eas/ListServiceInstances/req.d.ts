export interface ListServiceInstancesRequest {
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何获取服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 服务实例列表的页，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的实例数量，默认为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 关键字搜索。支持按实例名、实例IP、实例所在的机器的IP、实例规格搜索。
     * @example `10.118.xx.xx`
     */
    "Filter"?: string;
    /**
     * 服务实例所在的资源组类型。
     * @example `PublicResource`
     */
    "ResourceType"?: string;
    /**
     * 实例规格。
     * @example `ecs.c7.large`
     */
    "InstanceType"?: string;
    /**
     * 服务实例的状态。
     * @example `Running`
     */
    "InstanceStatus"?: string;
    /**
     * 服务实例的IP。
     * @example `10.224.xx.xx`
     */
    "InstanceIP"?: string;
    /**
     * 服务实例的名字。
     * @example `foo-bdc5xxxx-8l7rk`
     */
    "InstanceName"?: string;
    /**
     * 服务实例所在机器的IP。
     * @example `10.224.xx.xx`
     */
    "HostIP"?: string;
    /**
     * 是否为抢占式实例。
     * @example `false`
     */
    "IsSpot"?: boolean;
    /**
     * 服务的角色。
     * @example `Queue`
     */
    "Role"?: string;
    /**
     * 排序字段。
     * @example `StartTime`
     */
    "Sort"?: string;
    /**
     * 排序顺序。
     * @example `desc`
     */
    "Order"?: string;
}
