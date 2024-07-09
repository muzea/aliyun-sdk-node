export interface DescribeVsCertificateListResponse {
    /**
     * 本次调用的请求id
     * @example `6E310519-E035-51AB-80D4-C1CBECD39EB5`
     */
    RequestId: string;
    /**
     * 证书id
     */
    CertificateListModel: {
        /**
         * 证书个数
         * @example `2`
         */
        Count: number;
        /**
         * 证书列表信息
         */
        CertList: {
            /**
             * 时间
             * @example `1632462708`
             */
            LastTime: number;
            /**
             * 证书指纹。
             * @example `3EB2585309AE5C8F369****7CDA6A8F5CEC8B2D4`
             */
            Fingerprint: string;
            /**
             * 证书名称
             * @example `cert-5391062`
             */
            CertName: string;
            /**
             * 证书发行商
             * @example `xxxxCert Inc`
             */
            Issuer: string;
            /**
             * 证书id
             * @example `6338888`
             */
            CertId: number;
            /**
             * 证书中的CN属性，一般是一个域名。
             * @example `example.aliyundoc.com`
             */
            Common: string;
        }[];
    };
}
