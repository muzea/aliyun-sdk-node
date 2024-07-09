export interface AddSSLCertRequest {
    /**
     * 域名ID。
     * @example `0`
     */
    "DomainId"?: number;
    /**
     * 证书ID。
     * @example `5213641-cn-hangzhou`
     */
    "CertIdentifier"?: string;
    /**
     * 网关唯一ID。
     * @example `gw-c70622ff52fe49beb29bea9a6f52****`
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
