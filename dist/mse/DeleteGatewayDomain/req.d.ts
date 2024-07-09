export interface DeleteGatewayDomainRequest {
    /**
     * 域名ID。
     * @example `109`
     */
    "Id"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-90392d768a3847a7b804c505254d****`
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
