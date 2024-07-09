export interface UpdateGatewayRouteWafStatusRequest {
    /**
     * 路由条目ID。
     * @example `645`
     */
    "RouteId": number;
    /**
     * 网关唯一ID。
     * @example `gw-86575c0bc9f04ecfbacb92b8e392****`
     */
    "GatewayUniqueId": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
    /**
     * 是否开启WAF。
     * @example `true`
     */
    "EnableWaf": boolean;
}
