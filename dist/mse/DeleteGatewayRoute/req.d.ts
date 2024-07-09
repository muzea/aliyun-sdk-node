export interface DeleteGatewayRouteRequest {
    /**
     * 路由条目ID。
     * @example `252`
     */
    "RouteId"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-492af9b04bb4474cae9d645be850e3d7`
     */
    "GatewayUniqueId"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
