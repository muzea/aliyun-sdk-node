export interface OfflineGatewayRouteRequest {
    /**
     * 路由条目ID。
     * @example `645`
     */
    "RouteId": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-77e1153db6e14c0a8b1fae20bcb89ca5`
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
