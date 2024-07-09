export interface DescribeAntChainDownloadPathsResponse {
    /**
     * 请求ID
     * @example `E6F487D4-8606-41B5-B289-46D5EFBD3417`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * SDK下载链接
         * @example `http://***`
         */
        SdkUrl: string;
        /**
         * ca.crt下载链接
         * @example `http://***ca.crt`
         */
        CaCrtUrl: string;
        /**
         * client.crt下载链接
         * @example `http://***client.crt`
         */
        ClientCrtUrl: string;
        /**
         * trust.CA下载链接
         * @example `http://***trustCa`
         */
        TrustCaUrl: string;
    };
}
