export interface DescribeCdnSSLCertificateListResponse {
    /**
     * 请求ID。
     * @example `E9D3257A-1B7C-414C-90C1-8D07AC47BCAC`
     */
    RequestId: string;
    /**
     * 证书列表信息。
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
                 * @example `1679896965`
                 */
                LastTime: number;
                /**
                 * 证书指纹。
                 * @example `933c6ddee95c9c41a40f9f50493d82be03ad87bf`
                 */
                Fingerprint: string;
                /**
                 * 证书名称。
                 * @example `证书1`
                 */
                CertName: string;
                /**
                 * 证书发行商。
                 * @example `yourCertIssuer`
                 */
                Issuer: string;
                /**
                 * 证书ID。
                 * @example `9128192`
                 */
                CertId: number;
                /**
                 * 证书中的CN属性，一般是一个域名。
                 * @example `example.com`
                 */
                Common: string;
                /**
                 * 证书所在地域。支持**cn-hangzhou**和**ap-southeast-1**，默认**cn-hangzhou** .
                 * @example `cn-hangzhou`
                 */
                CertRegion: string;
            }[];
        };
        /**
         * 当前页数，起始值为1，默认为1。
         * @example `2`
         */
        PageNumber: number;
        /**
         * 每页大小，取值：1~1000之间的任意整数。
         * @example `20`
         */
        PageSize: number;
    };
}
