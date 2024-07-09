export interface DescribeCertificateInfoByIDResponse {
    /**
     * 请求ID。
     * @example `5C1E43DC-9E51-4771-82C0-7D5ECEB547A1`
     */
    RequestId: string;
    CertInfos: {
        /**
         * 证书信息列表。
         */
        CertInfo: {
            /**
             * 证书过期时间。
             * @example `2098-02-08 08:02:07 +0000 UTC`
             */
            CertExpireTime: string;
            /**
             * 证书开始时间。
             * @example `2015-12-21 08:02:07 +0000 UTC`
             */
            CreateTime: string;
            /**
             * 证书类型。
             * - free：免费证书。
             * - cas：云盾证书。
             * - upload：自定义上传。
             * @example `cas`
             */
            CertType: string;
            /**
             * 证书名称。
             * @example `example_cert`
             */
            CertName: string;
            /**
             * 证书ID。
             * @example `1644xx`
             */
            CertId: string;
            /**
             * 使用此证书的域名列表。
             * @example `["example.com"]`
             */
            DomainList: string;
            /**
             * 证书内容。
             * @example `-----BEGIN CERTIFICATE-----\nxxx-----END CERTIFICATE-----\n`
             */
            HttpsCrt: string;
        }[];
    };
}
