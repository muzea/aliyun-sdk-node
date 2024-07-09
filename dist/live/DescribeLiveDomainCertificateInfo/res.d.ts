export interface DescribeLiveDomainCertificateInfoResponse {
    /**
     * 请求ID。
     * @example `5C1E43DC-9E51-4771-82C0-7D5ECEB547A1`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息。
         */
        CertInfo: {
            /**
             * 免费证书状态。取值：
             * - **success**：已生效。
             * - **checking**：检测域名是否在阿里云直播。
             * - **cname_error**：域名没有切到阿里云直播。
             * - **domain_invalid**：域名包含非法字符。
             * - **unsupport_wildcard**：不支持泛域名。
             * - **applying**：证书申请中。
             * - **failed**：证书申请失败。
             * >**status**只有在域名证书为免费证书时有意义。当域名证书不是免费证书时，会返回空值。
             * @example `success`
             */
            Status: string;
            /**
             * 证书时长。
             *  - 有效期大于12个月的，显示XX year(s) XX month(s)。例如，2 years 3 months表示有效期为2年3个月。
             * - 有效期小于12个月的，显示为XX month(s)。例如，3 months表示有效期为3个月。
             * @example `3 months`
             */
            CertLife: string;
            /**
             * 证书过期时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-06-03T22:03:39Z`
             */
            CertExpireTime: string;
            /**
             * 证书公钥。
             * @example `yourSSLPub`
             */
            SSLPub: string;
            /**
             * HTTPS开启状态。取值：
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SSLProtocol: string;
            /**
             * 证书类型。取值：
             * - **free**：免费证书。
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `cas`
             */
            CertType: string;
            /**
             * 证书匹配的播流域名或推流域名。
             * @example `example.com`
             */
            CertDomainName: string;
            /**
             * 证书名称。
             * @example `Cert-****`
             */
            CertName: string;
            /**
             * 证书组织。
             * @example `Let's Encrypt`
             */
            CertOrg: string;
            /**
             * 播流域名或推流域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
