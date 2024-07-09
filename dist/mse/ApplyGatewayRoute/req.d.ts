export interface ApplyGatewayRouteRequest {
    /**
     * 路由条目ID。
     * @example `950`
     */
    "RouteId": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-1a4ab101d5924b6f92c5ec98a841761f`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
