export interface ListDynamicRoutesRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~1000。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 动态路由名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `dynamic_route_name`
     */
    "Name"?: string;
    /**
     * 动态路由状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 动态路由ID集合。最多可输入100个动态路由ID。
     */
    "DynamicRouteIds"?: string[];
    /**
     * SASE的POP集群接入点支持的地域列表。
     */
    "RegionIds"?: string[];
    /**
     * 动态路由的内网访问应用ID。无法和内网访问标签ID同时过滤。取值来源：
     *  - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~)：批量查询内网访问应用。
     *  - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~)：创建内网访问应用。
     * @example `pa-application-e12860ef6c48****`
     */
    "ApplicationId"?: string;
    /**
     * 动态路由的内网访问标签ID。无法和内网访问应用ID同时过滤。取值来源：
     *  - [ListPrivateAccessTags](~~ListPrivateAccessTags~~)：批量查询内网访问标签。
     *  - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~)：创建内网访问标签。
     * @example `tag-d3f64e8bdd4a****`
     */
    "TagId"?: string;
    /**
     * 动态路由下一跳实例ID。取值来源：
     *  - [ListConnectors](~~ListConnectors~~)：批量查询Connector。
     * @example `connector-8ccb13b6f52c****`
     */
    "NextHop"?: string;
}
