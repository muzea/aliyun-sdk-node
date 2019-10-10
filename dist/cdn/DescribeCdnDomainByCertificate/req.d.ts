interface DescribeCdnDomainByCertificateRequest {
    "RegionId"?: string;
    /**
    * 证书公钥，需要base64编码后再encodeURIComponent，支持pem格式。
    * @example `yourSSLPub`
    */ "SSLPub": string;
    "OwnerId"?: number;
}
export { DescribeCdnDomainByCertificateRequest };