export interface DescribeLiveCertificateListResponse {
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
    /**
     * 数据类型。
     */
    CertificateListModel: {
        /**
         * 证书个数。
         * @example `2`
         */
        Count: number;
        CertList: {
            /**
             * 证书列表信息。
             */
            Cert: {
                /**
                 * 证书签发时间。单位：秒。
                 * @example `1512388659`
                 */
                LastTime: number;
                /**
                 * 证书指纹。
                 * @example `****`
                 */
                Fingerprint: string;
                /**
                 * 证书名称。
                 * @example `Cert-****`
                 */
                CertName: string;
                /**
                 * 证书发行商。
                 * @example `*****`
                 */
                Issuer: string;
                /**
                 * 证书ID。
                 * @example `123456`
                 */
                CertId: number;
                /**
                 * 证书的CN属性。
                 * @example `example.net`
                 */
                Common: string;
            }[];
        };
    };
}
