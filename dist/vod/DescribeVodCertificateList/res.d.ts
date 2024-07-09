export interface DescribeVodCertificateListResponse {
    /**
     * 请求ID。
     * @example `FC0E34AC-0239-44A7-****-800DE522C8DA`
     */
    RequestId: string;
    /**
     * 证书列表信息。
     */
    CertificateListModel: {
        /**
         * 证书个数。
         * @example `2`
         */
        Count: number;
        CertList: {
            /**
             * 证书列表。
             */
            Cert: {
                /**
                 * 证书签发时间。单位：秒。
                 * @example `1512388610`
                 */
                LastTime: number;
                /**
                 * 证书指纹。
                 * @example `****`
                 */
                Fingerprint: string;
                /**
                 * 证书名称。
                 * @example `证书`
                 */
                CertName: string;
                /**
                 * 证书发行商。
                 * @example `****`
                 */
                Issuer: string;
                /**
                 * 证书ID。
                 * @example `235437`
                 */
                CertId: number;
                /**
                 * 证书公用名。
                 * @example `test`
                 */
                Common: string;
            }[];
        };
    };
}
