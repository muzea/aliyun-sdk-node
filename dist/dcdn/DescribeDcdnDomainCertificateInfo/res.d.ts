export interface DescribeDcdnDomainCertificateInfoResponse {
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
             * 证书状态。
             * - **success**：已生效。
             * - **checking**：检测域名是否在阿里云全站加速。
             * - **cname_error**：域名没有切到阿里云全站加速。
             * - **domain_invalid**：域名包含非法字符。
             * - **unsupport_wildcard**：不支持泛域名。
             * - **applying**：证书申请中。
             * - **get_token_timeout**：证书申请超时。
             * - **check_token_timeout**：校验超时。
             * - **get_cert_timeout**：获取证书超时。
             * - **failed**：证书申请失败。
             * @example `success`
             */
            Status: string;
            /**
             * 证书时长。单位：**months**（月）和**years**（年）。
             * @example `3 months`
             */
            CertLife: string;
            /**
             * 证书过期时间。
             * @example `2018-06-03T22:03:39Z`
             */
            CertExpireTime: string;
            /**
             * 证书公钥。
             * @example `xxxx`
             */
            SSLPub: string;
            /**
             * HTTPS开启状态。
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            SSLProtocol: string;
            /**
             * 证书类型。
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `cas`
             */
            CertType: string;
            /**
             * 证书匹配的域名。
             * @example `example.com`
             */
            CertDomainName: string;
            /**
             * 证书名称。
             * @example `cert-example.com`
             */
            CertName: string;
            /**
             * 证书组织。
             * @example `Let's Encrypt`
             */
            CertOrg: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
            /**
             * 证书ID。
             * @example `9002448`
             */
            CertId: string;
            /**
             * 证书区域。
             * @example `cn-hangzhou`
             */
            CertRegion: string;
        }[];
    };
}
