export interface DescribeDcdnDomainByCertificateResponse {
    /**
     * 请求ID。
     * @example `ASAF2FDS-12SADSA-DDSAE3D-DSADCD4C-CDADS2D`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息。
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
             * @example `example.aliyundoc.com`
             */
            CertSubjectCommonName: string;
            /**
             * 证书类型。支持**RSA**、**DSA**、**ECDSA**三种取值。
             * @example `RSA`
             */
            CertType: string;
            /**
             * 证书匹配的域名（DNS字段），多个域名用英文逗号（,）分隔。
             * @example `*.example.com,example.org`
             */
            DomainNames: string;
            /**
             * 证书过期状态。取值：
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
             * 使用对应证书的域名列表。
             * 如果该参数的返回值不为空，则将域名列表与对应的证书进行匹配，多个域名用英文逗号（,）分隔。
             * @example `example.com,example.org`
             */
            DomainList: string;
        }[];
    };
}
