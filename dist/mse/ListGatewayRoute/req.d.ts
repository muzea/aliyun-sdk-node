export interface ListGatewayRouteRequest {
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页展示实例数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序属性。
     * @example `GmtCreate`
     */
    "OrderItem"?: string;
    /**
     * 排序。该字段目前不可用，下线中。
     * @example `false`
     */
    "DescSort"?: boolean;
    /**
     * 过滤条件，格式为{"key1":"value1"}。
     */
    "FilterParams"?: {
        /**
         * 网关ID。
         * @example `81`
         */
        GatewayId: number;
        /**
         * 路由名称。
         * @example `test`
         */
        Name: string;
        /**
         * 路由状态：
         * - 未发布：0
         * - 发布中：2
         * - 已发布：3
         * - 编辑中(有更新未发布)：4
         * - 下线中：5
         * - 不可用：6
         * @example `3`
         */
        Status: number;
        /**
         * 缺省服务id。
         * @example `1`
         */
        DefaultServiceId: number;
        /**
         * 顺序
         * @example `1`
         */
        RouteOrder: number;
        /**
         * 域名id。
         * @example `284`
         */
        DomainId: number;
        /**
         * 网关唯一标识ID。
         * @example `gw-30a0106924c94bca8712ec4e79fc5acc`
         */
        GatewayUniqueId: string;
        /**
         * 关联域名
         * @example `*.alites.com`
         */
        DomainName: string;
        /**
         * 路由路径。
         * @example `/test`
         */
        Path: string;
    };
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
