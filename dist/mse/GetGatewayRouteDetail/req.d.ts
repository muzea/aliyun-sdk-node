export interface GetGatewayRouteDetailRequest {
    /**
     * 路由ID。
     * @example `1050`
     */
    "RouteId": number;
    /**
     * 网关唯一标识ID。
     * @example `gw-5d3a78a53ec947aa928212d671d400ac`
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
