export interface ListApiDestinationsResponse {
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `96D7C0AB-DCE5-5E82-96B8-4725E170****`
     */
    RequestId: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。                                 请求异常，返回具体异常错误码。
     * @example `success`
     */
    Message: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * API端点结果集。
         */
        ApiDestinations: {
            /**
             * API端点名称。
             * @example `api-destination-2`
             */
            ApiDestinationName: string;
            /**
             * 连接配置名称。
             * @example `connection-name`
             */
            ConnectionName: string;
            /**
             * 连接配置描述信息。
             * @example `demo`
             */
            Description: string;
            /**
             * API端点请求配置信息。
             */
            HttpApiParameters: {
                /**
                 * API端点的接入点地址。
                 * @example `http://127.0.0.1:8001/api`
                 */
                Endpoint: string;
                /**
                 * HTTP请求方法。
                 * - POST
                 * - GET
                 * - DELETE
                 * - PUT
                 * - HEAD
                 * - TRACE
                 * - PATCH
                 * @example `POST`
                 */
                Method: string;
            };
            /**
             * 创建时间。
             * @example `1665223213000`
             */
            GmtCreate: number;
        }[];
        /**
         * 如果还有多余的返回值则会返回NextToken。
         * @example `1`
         */
        NextToken: string;
        /**
         * 总条数。
         * @example `2`
         */
        Total: number;
        /**
         * 限定每次返回的最大条数。
         * @example `10`
         */
        MaxResults: number;
    };
}
