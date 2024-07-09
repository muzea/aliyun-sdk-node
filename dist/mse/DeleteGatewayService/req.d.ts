export interface DeleteGatewayServiceRequest {
    /**
     * 服务ID。
     * @example `190`
     */
    "ServiceId": string;
    /**
     * 网关ID。
     * @example `60`
     */
    "GatewayId"?: number;
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
