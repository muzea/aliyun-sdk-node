export interface ListGatewayDomainRequest {
    /**
     * 网关唯一标识ID。
     * @example `gw-c9bc5afd61014165bd58f621b491****`
     */
    "GatewayUniqueId": string;
    /**
     * 域名类型。
     * @example `All`
     */
    "Type"?: string;
    /**
     * 按域名模糊搜索
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
