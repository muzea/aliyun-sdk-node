export interface UpdateGatewayRouteHTTPRewriteRequest {
    /**
     * 路由ID
     * @example `238`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `430`
     */
    "GatewayId"?: number;
    /**
     * HTTP重写信息，支持JSON格式。
     * @example `{"pathType":"PRE","path":"/","status":"off"}`
     */
    "HttpRewriteJSON"?: string;
    /**
     * 网关唯一标识。
     * @example `gw-90392d768a3847a7b804c505254da96d`
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
