export interface DescribeVsDomainCertificateInfoResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息。
         */
        CertInfo: {
            /**
             * 证书状态。
             *  - **success**：已生效。
             *  - **checking**：检测域名是否在阿里云CDN。
             *  - **cname_error**：域名没有切到阿里云CDN。
             *  - **top_domain_cname_error**：顶级域名没有切到阿里云CDN。
             *  - **domain_invalid**：域名包含非法字符。
             *  - **unsupport_wildcard**：不支持泛域名。
             *  - **applying**：证书申请中。
             *  - **get_token_timeout**：证书申请超时。
             *  - **check_token_timeout**：校验超时。
             *  - **get_cert_timeout**：获取证书超时。
             *  - **failed**：证书申请失败。
             * @example `success`
             */
            Status: string;
            /**
             * 证书时长单位。
             * - **months**：月。
             * - **years**：年。
             * @example `months`
             */
            CertLife: string;
            /**
             * 证书过期时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-06-03T22:03:39Z`
             */
            CertExpireTime: string;
            /**
             * 证书公钥。
             * @example `asdadaxxxx`
             */
            SSLPub: string;
            /**
             * 证书类型。
             * - **free**：免费证书。
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `free`
             */
            CertType: string;
            /**
             * https开启状态。
             * - ** on**：已开启。
             * - ** off**：未开启。
             * @example `on`
             */
            ServerCertificateStatus: string;
            /**
             * 证书匹配的域名。
             * @example `example.com`
             */
            CertDomainName: string;
            /**
             * 证书名称。
             * @example `myname`
             */
            CertName: string;
            /**
             * 该证书签发的CA名称。
             * @example `Let's Encrypt`
             */
            CertOrg: string;
            /**
             * 加速域名。
             * @example `example.com`
             */
            DomainName: string;
        }[];
    };
}
