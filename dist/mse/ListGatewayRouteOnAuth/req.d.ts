export interface ListGatewayRouteOnAuthRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c9bc5afd61014165bd58f621b491****`
     */
    "GatewayUniqueId": string;
    /**
     * 鉴权类型：
     * - JWT
     * @example `JWT`
     */
    "Type": string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
