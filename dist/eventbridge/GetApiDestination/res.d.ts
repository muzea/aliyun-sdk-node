export interface GetApiDestinationResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `B896B484-F16D-59DE-9E23-DD0E5C361108`
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
     * 返回结果。
     */
    Data: {
        /**
         * API 端点名称
         * @example `demo`
         */
        ApiDestinationName: string;
        /**
         * 连接配置名称
         * @example `test-basic`
         */
        ConnectionName: string;
        /**
         * API的描述信息。
         * @example `demo`
         */
        Description: string;
        /**
         * API 端点请求配置信息
         */
        HttpApiParameters: {
            /**
             * API 端点的接入点地址
             * @example `http://127.0.0.1:8001/api
            `
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
         * @example `1649055710565`
         */
        GmtCreate: number;
    };
}
