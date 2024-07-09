export interface DescribeAntChainDownloadPathsV2Response {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 结果状态
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果消息
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 返回码
     * @example `OK`
     */
    Code: string;
    /**
     * 请求消息
     * @example `OK`
     */
    Message: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     *
     * 请求结果
     */
    Result: {
        /**
         *
         * sdk下载链接
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
         * trustCA下载链接
         * @example `http://***trustCa`
         */
        TrustCaUrl: string;
    };
}
