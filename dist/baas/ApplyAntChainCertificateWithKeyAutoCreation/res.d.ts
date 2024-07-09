export interface ApplyAntChainCertificateWithKeyAutoCreationResponse {
    /**
     * 请求ID
     * @example `3E1894AF-FEE7-4C6C-8C2A-2B3EE0105B07`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 私钥
         * @example `-----BEGIN ENCRYPTED PRIVATE KEY-----\nMII***A=\n-----END ENCRYPTED PRIVATE KEY-----\n`
         */
        PrivateKey: string;
        /**
         * 下载地址
         */
        DownloadPath: {
            /**
             * SDK下载链接
             * @example `http://***`
             */
            SdkUrl: string;
            /**
             * client.crt下载链接
             * @example `http://***client.crt`
             */
            ClientCrtUrl: string;
            /**
             * ca.crt下载链接
             * @example `http://***ca.crt`
             */
            CaCrtUrl: string;
            /**
             * trust.CA下载链接
             * @example `http://***trustCa`
             */
            TrustCaUrl: string;
        };
    };
}
