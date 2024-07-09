export interface UpdateGatewayRouteAuthRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-0adf3ad751284cc69fcf9669fba*****`
     */
    "GatewayUniqueId": string;
    /**
     * 路由ID。
     * @example `109`
     */
    "Id": number;
    /**
     * 网关ID。
     * @example `102`
     */
    "GatewayId"?: number;
    /**
     * 鉴权配置。
     */
    "AuthJSON": {
        /**
         * 鉴权类型（传空字符串代表关闭）：
         * - JWT
         * @example `JWT`
         */
        Type: string;
    };
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
