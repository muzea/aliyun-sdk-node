export interface DescribeDcdnSMCertificateListResponse {
    /**
     * 请求ID。
     * @example `DC0E34AC-0239-44A7-AB0E-800DE522C8DC`
     */
    RequestId: string;
    /**
     * 证书信息类型。
     */
    CertificateListModel: {
        /**
         * 证书个数。
         * @example `2`
         */
        Count: number;
        /**
         * 证书列表。
         */
        CertList: {
            /**
             * 证书名称。
             * @example `yourCertName`
             */
            CertName: string;
            /**
             * 证书发行商。
             * @example `yourCertIssuer`
             */
            Issuer: string;
            /**
             * 证书ID。
             * @example `yourCertldentifier`
             */
            CertIdentifier: string;
            /**
             * 证书公用名。
             * @example `yourCertCommon`
             */
            Common: string;
        }[];
    };
}
