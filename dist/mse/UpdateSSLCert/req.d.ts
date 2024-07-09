export interface UpdateSSLCertRequest {
    /**
     * 域名ID
     * @example `210`
     */
    "DomainId"?: number;
    /**
     * 证书ID。
     * @example `5951436-cn-hangzhou`
     */
    "CertIdentifier": string;
    /**
     * 网关唯一标识ID。
     * @example `gw-2a99625886d54722be94d92e9a69****`
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
