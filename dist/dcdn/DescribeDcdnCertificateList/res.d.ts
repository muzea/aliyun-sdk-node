export interface DescribeDcdnCertificateListResponse {
    /**
     * 请求id。
     * @example `FC0E34AC-0239-44A7-AB0E-800DE522C8DA`
     */
    RequestId: string;
    /**
     * 证书信息类型。
     */
    CertificateListModel: {
        /**
         * 证书数量。
         * @example `2`
         */
        Count: number;
        CertList: {
            /**
             * 证书列表信息。
             */
            Cert: {
                /**
                 * 证书最后修改时间，单位：毫秒
                 * @example `1548065550`
                 */
                LastTime: number;
                /**
                 * 证书指纹。
                 * @example `0151xxxx`
                 */
                Fingerprint: string;
                /**
                 * 证书名称。
                 * @example `yourCertName`
                 */
                CertName: string;
                /**
                 * 证书发行商。
                 * @example `DigiCert`
                 */
                Issuer: string;
                /**
                 * 证书ID。
                 * @example `7428244`
                 */
                CertId: number;
                /**
                 * 证书公用名。
                 * @example `example.com`
                 */
                Common: string;
            }[];
        };
    };
}
