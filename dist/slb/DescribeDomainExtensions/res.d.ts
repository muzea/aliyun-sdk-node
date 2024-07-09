export interface DescribeDomainExtensionsResponse {
    /**
     * 请求ID。
     * @example `48C1B671-C6DB-4DDE-9B30-1055*****`
     */
    RequestId: string;
    DomainExtensions: {
        /**
         * 扩展域名列表。
         */
        DomainExtension: {
            /**
             * 域名使用的证书ID。
             * @example `12315790****3_166f8****9_1714****08_70998****`
             */
            ServerCertificateId: string;
            /**
             * 域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 扩展域名ID。
             * @example `de-bp1rp7ta1****`
             */
            DomainExtensionId: string;
        }[];
    };
}
