export interface DescribeDomainCertificateInfoResponse {
    /**
     * 请求ID。
     * @example `5C1E43DC-9E51-4771-82C0-7D5ECEB547A1`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息列表。
         */
        CertInfo: {
            /**
             * 证书过期时间。
             * @example `2018-06-03T22:03:39Z`
             */
            CertExpireTime: string;
            /**
             * 证书时长单位。
             * - **months**：月。
             * - **years**：年。
             * @example `months`
             */
            CertLife: string;
            /**
             * 证书状态。
             * - **success**：已生效。
             * - **checking**：检测域名是否在阿里云CDN。
             * - **cname_error**：域名没有切到阿里云CDN。
             * - **top\_domain\_cname\_error**：顶级域名没有切到阿里云CDN。
             * - **domain\_invalid**：域名包含非法字符。
             * - **unsupport\_wildcard**：不支持泛域名。
             * - **applying**：证书申请中。
             * - **get\_token\_timeout**：证书申请超时。
             * - **check\_token\_timeout**：校验超时。
             * - **get\_cert\_timeout**：获取证书超时。
             * - **failed**：证书申请失败。
             * @example `success`
             */
            Status: string;
            /**
             * 证书更新时间。
             * @example `2018-06-03T22:03:39Z`
             */
            CertUpdateTime: string;
            /**
             * 证书匹配的域名。
             * @example `example.com`
             */
            CertDomainName: string;
            /**
             * https开启状态。
             * - **on**：已开启。
             * - **off**：未开启。
             * @example `on`
             */
            ServerCertificateStatus: string;
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
            /**
             * 证书开始时间。
             * @example `2018-06-03T22:03:39Z`
             */
            CertStartTime: string;
            /**
             * 证书类型。
             * - **free**：免费证书。
             * - **cas**：云盾证书。
             * - **upload**：自定义上传。
             * @example `free`
             */
            CertType: string;
            /**
             * 证书名称。
             * @example `example.com`
             */
            CertName: string;
            /**
             * 域名CNAME状态。
             * - **ok**：域名CNAME已切到阿里云CDN。
             * - **cname_error**：域名CNAME错误，没有切到阿里云CDN。
             * - **top_domain_cname_error**：顶级域名CNAME错误，没有切到阿里云CDN。
             * - **unsupport_wildcard**：不支持泛域名。
             * @example `ok`
             */
            DomainCnameStatus: string;
            /**
             * 证书公钥。
             * @example `asdadaxxxx`
             */
            ServerCertificate: string;
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
