export interface DescribeAntChainMiniAppBrowserQRCodeAccessLogResponse {
    /**
     * 请求ID
     * @example `D68D66B6-1964-4073-8714-B49F5EF1AEFC`
     */
    RequestId: string;
    /**
     * 请求结果
     */
    Result: {
        /**
         * 总查询账号数
         * @example `100`
         */
        AccessAlipayAccountCount: number;
        /**
         * 总查询次数
         * @example `1000`
         */
        AccessCount: number;
    };
}
