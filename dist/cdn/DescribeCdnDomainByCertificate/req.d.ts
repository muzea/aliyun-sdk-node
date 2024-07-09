export interface DescribeCdnDomainByCertificateRequest {
    /**
     * 证书公钥，需要base64编码后再进行encodeURIComponent。
     * 支持pem格式。
     * @example `******`
     */
    "SSLPub": string;
    /**
     * 表示返回的域名列表只包含开启或关闭HTTPS的域名。
     * - true：开启
     * - false：关闭
     * @example `true`
     */
    "SSLStatus"?: boolean;
    /**
     * 表示返回的域名列表是否与证书精准匹配。
     * - true：开启
     * - false：关闭
     * @example `true`
     */
    "Exact"?: boolean;
}
