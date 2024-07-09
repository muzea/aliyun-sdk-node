export interface ListTransitRouterRouteTablesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `dd20****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `82678F4A-C9F7-4CC1-8BF0-D619A63BFC57`
     */
    RequestId: string;
    /**
     * 总条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时，每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 路由表信息列表。
     */
    TransitRouterRouteTables: {
        /**
         * 路由表的状态。
         * - **Creating**：创建中。
         * - **Deleting**：删除中。
         * - **Active**：可用。
         * @example `Active`
         */
        TransitRouterRouteTableStatus: string;
        /**
         * 路由表的类型。
         * - **Custom**：自定义路由表。
         * - **System**：系统默认路由表。
         * @example `System`
         */
        TransitRouterRouteTableType: string;
        /**
         * 路由表的创建时间。
         * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
         * @example `2021-03-15T09:39Z`
         */
        CreateTime: string;
        /**
         * 路由表ID。
         * @example `vtb-bp1dudbh2d5na6b50****`
         */
        TransitRouterRouteTableId: string;
        /**
         * 路由表的名称。
         * @example `testname`
         */
        TransitRouterRouteTableName: string;
        /**
         * 路由表的描述信息。
         * @example `testdesc`
         */
        TransitRouterRouteTableDescription: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `test`
             */
            Key: string;
            /**
             * 标签值。
             * @example `test`
             */
            Value: string;
        }[];
        /**
         * 路由表功能选项。
         */
        RouteTableOptions: {
            /**
             * 多地域等价路由，取值：
             * - **disable**：关闭多地域等价路由。关闭多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会优选Region ID最小的TR作为下一跳（按字母排序），此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再关闭。
             * - **enable**：开启多地域等价路由。开启多地域等价路由后，从不同地域学到的相同前缀的路由在其他路由属性一致的情况下将会形成等价路由，此时流量的时延和不同地域间消耗的带宽会发生变化。请确保充分评估后再开启。
             * @example `disable`
             */
            MultiRegionECMP: string;
        };
        /**
         * 企业版转发路由器实例所属的地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 转发路由器实例ID。
         * @example `tr-8vb8bie2koduo5awz****`
         */
        TransitRouterId: string;
    }[];
}
