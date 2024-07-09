export interface DescribeDcdnSSLCertificateListResponse {
    /**
     * 请求ID。
     * @example `CB1A380B-09F0-41BB-3C82-72F8FD6DA2FE`
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
                 * @example `1548065550`
                 */
                LastTime: number;
                /**
                 * 证书指纹。
                 * @example `4278e3b81ab5bc678d253e74c17ffb88`
                 */
                Fingerprint: string;
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
                 * @example `7428244`
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
