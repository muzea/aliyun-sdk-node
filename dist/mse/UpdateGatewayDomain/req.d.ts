export interface UpdateGatewayDomainRequest {
    /**
     * 协议类型。
     * - HTTPS
     * - HTTP
     * @example `HTTPS`
     */
    "Protocol"?: string;
    /**
     * 强制HTTPS
     * @example `false`
     */
    "MustHttps"?: boolean;
    /**
     * 证书ID。
     * @example `6209108-cn-hangzhou`
     */
    "CertIdentifier"?: string;
    /**
     * 需要更新的域名id。
     * @example `94`
     */
    "Id": number;
    /**
     * 网关唯一标识ID。
     * @example `gw-86575c0bc9f04ecfbacb92b8e392****`
     */
    "GatewayUniqueId": string;
    /**
     * 是否开启`Http2`。
     * - `open`：开启`Http2`。
     * - `close`：关闭`Http2`。
     * - `globalConfig`：使用全局配置。
     * @example `close`
     */
    "Http2"?: string;
    /**
     * Tls最大版本。
     * @example `TLS 1.3`
     */
    "TlsMax"?: string;
    /**
     * Tls最小版本。
     * @example `TLS 1.0`
     */
    "TlsMin"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
