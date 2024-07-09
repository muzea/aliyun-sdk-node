export interface GetGatewayDomainDetailRequest {
    /**
     * 域名ID。
     * @example `29`
     */
    "Id"?: string;
    /**
     * 网关唯一标识ID。
     * @example `gw-6d0b23e1d39e41658a968d79a635****`
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
