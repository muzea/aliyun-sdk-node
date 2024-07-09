export interface ListTransitRouterRouteTablesRequest {
    /**
     * 分批次查询时，每次显示的条目数。取值范围：**1**~**100**，默认值：**20**。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的**NextToken**值。
     * @example `dd20****`
     */
    "NextToken"?: string;
    /**
     * 路由表的类型。取值：
     * - **Custom**：自定义路由表。
     * - **System**：系统默认路由表。
     * @example `Custom`
     */
    "TransitRouterRouteTableType"?: string;
    /**
     * 企业版转发路由器实例ID。
     * @example `tr-uf654ttymmljlvh2x****`
     */
    "TransitRouterId"?: string;
    /**
     * 路由表的状态。取值：
     * - **Creating**：创建中。
     * - **Deleting**：删除中。
     * - **Active**：可用。
     * @example `Active`
     */
    "TransitRouterRouteTableStatus"?: string;
    /**
     * 路由表的名称。
     * 您可以一次查询多个路由表的信息，**N**的最大值为**20**。
     * > 如果您同时通过**TransitRouterRouteTableNames.N**和**TransitRouterRouteTableIds.N**查询路由表的信息时，路由表的名称和路由表的ID需保持一致。
     * @example `testname`
     */
    "TransitRouterRouteTableNames"?: string[];
    /**
     * 路由表的ID。
     * 您可以一次查询多个路由表的信息，**N**的最大值为**20**。
     * @example `vtb-bp1l8awdb4iuo9uwu****`
     */
    "TransitRouterRouteTableIds"?: string[];
    /**
     * 标签信息。
     * 一次最多支持输入20个标签信息。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 一次最多支持输入20个标签的标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。
         * 标签值可以为空或输入不超过128个字符的字符串，不能以`aliyun`或者`acs:`开头，不能包含`http://`或者`https:// `。
         * 每一个标签键对应一个标签值，一次最多支持输入20个标签键对应的标签值。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 路由表功能选项。
     */
    "RouteTableOptions"?: {
        /**
         * 多地域等价路由，取值：
         * - **disable**：关闭多地域等价路由。关闭多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会优选Region ID最小的TR作为下一跳（按字母排序），此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再关闭。
         * - **enable**：开启多地域等价路由。开启多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会形成等价路由，此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再开启。
         * @example `disable`
         */
        MultiRegionECMP: string;
    };
}
