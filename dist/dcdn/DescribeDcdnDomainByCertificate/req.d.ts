export interface DescribeDcdnDomainByCertificateRequest {
    /**
     * 证书公钥。
     * 需要先采用Base64编码，再进行encodeURIComponent编码，支持PEM格式。
     * @example `xxx`
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
