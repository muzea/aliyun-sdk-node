export interface DescribeCdnDomainByCertificateResponse {
    /**
     * 请求ID。
     * @example `ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息列表。
         */
        CertInfo: {
            /**
             * 证书开始时间。
             * @example `Nov 29 23:59:59 2017 GMT`
             */
            CertStartTime: string;
            /**
             * 证书过期时间。
             * @example `Nov 29 00:00:00 2016 GMT`
             */
            CertExpireTime: string;
            /**
             * 证书CA废弃状态。取值：
             * - **yes**：已废弃。
             * - **no**：正常，未废弃。
             * @example `yes`
             */
            CertCaIsLegacy: string;
            /**
             * 证书所有者名称。
             * @example `owner`
             */
            CertSubjectCommonName: string;
            /**
             * 证书类型，取值：**RSA**、**DSA**、**ECDSA**。
             * @example `RSA`
             */
            CertType: string;
            /**
             * 证书匹配的域名（DNS字段），多个用英文逗号（,）分隔。
             * @example `*.example.com,aliyundoc.com`
             */
            DomainNames: string;
            /**
             * 证书过期状态。 取值：
             * - **yes**：已过期。
             * - **no**：未过期。
             * @example `yes`
             */
            CertExpired: string;
            /**
             * 证书颁发机构。
             * @example `C=US, O=Symantec Corporation, OU=Symantec Trust Network, OU=Domain Validated SSL, CN=Symantec Basic DV SSL CA - G1`
             */
            Issuer: string;
            /**
             * 如果该返回值不为空，则将该列表与证书做匹配，多个用英文逗号（,）分隔。
             * @example `example.com,aliyundoc.com`
             */
            DomainList: string;
        }[];
    };
}
