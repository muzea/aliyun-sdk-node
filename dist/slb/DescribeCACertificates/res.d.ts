export interface DescribeCACertificatesResponse {
    /**
     * 请求ID。
     * @example `365F4154-92F6-4AE4-92F8-7FF******`
     */
    RequestId: string;
    CACertificates: {
        /**
         * CA证书信息。
         */
        CACertificate: {
            /**
             * CA证书创建的时间戳。
             * @example `1504147745000`
             */
            CreateTimeStamp: number;
            /**
             * CA证书的过期时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2024-11-21T06:04:25Z`
             */
            ExpireTime: string;
            /**
             * CA证书的创建时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
             * @example `2021-08-31T02:49:05Z`
             */
            CreateTime: string;
            /**
             * CA证书过期的时间戳。
             * @example `1732169065000`
             */
            ExpireTimeStamp: number;
            /**
             * CA证书ID。
             * @example `139a00604bd-cn-east-hangzho****`
             */
            CACertificateId: string;
            /**
             * CA证书所属地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             *  CA证书的指纹。
             * @example `79:43:fb:7d:a4:7f:44:32:61:16:57:17:e3:e8:b7:36:03:57:f6:89`
             */
            Fingerprint: string;
            /**
             * 资源组ID。
             * @example `rg-atstuj3rtop****`
             */
            ResourceGroupId: string;
            /**
             * CA证书的域名。
             * @example `www.example.com`
             */
            CommonName: string;
            /**
             *  CA证书名称。
             * @example `test`
             */
            CACertificateName: string;
            Tags: {
                /**
                 * 标签。
                 */
                Tag: {
                    /**
                     * 资源的标签值。
                     * @example `1`
                     */
                    TagValue: string;
                    /**
                     * 资源的标签键。
                     * @example `test`
                     */
                    TagKey: string;
                }[];
            };
        }[];
    };
}
