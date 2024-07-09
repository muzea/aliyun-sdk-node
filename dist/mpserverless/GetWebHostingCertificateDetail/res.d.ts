export interface GetWebHostingCertificateDetailResponse {
    /**
     * 唯一请求ID。
     * @example `D85CAE0D-5B1F-4A56-B776-DEEA2B232E9F`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 证书有效期。
         * @example `1 years`
         */
        CertLife: string;
        /**
         * 证书类型。
         * - upload：上传证书。
         * - cas：云盾证书。
         * @example `upload`
         */
        CertType: string;
        /**
         * 域名。
         * @example `www.example.com`
         */
        CertDomainName: string;
        /**
         * 域名的证书绑定状态。
         * - off：无证书。
         * - on：已绑定证书。
         * @example `on`
         */
        ServerCertificateStatus: string;
        /**
         * 证书名称。
         * @example `test`
         */
        CertName: string;
        /**
         * 证书过期时间。
         * @example `1621252800000`
         */
        CertExpiredTime: number;
    };
}
