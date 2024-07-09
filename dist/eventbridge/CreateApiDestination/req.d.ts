export interface CreateApiDestinationRequest {
    /**
     * API名称，最大长度127个字符。最小长度2个字符。
     * @example `api-destination-name`
     */
    "ApiDestinationName": string;
    /**
     * 连接配置名称。最大长度127个字符。最小长度2个字符。
     * <notice>需要先调用Connection接口创建连接配置，ConnectionName填写已存在的连接名称。></notice>
     * @example `connection-name`
     */
    "ConnectionName": string;
    /**
     * API描述，不超过255个字符。
     * @example `连接配置描述信息`
     */
    "Description"?: string;
    /**
     * API端点的配置信息。
     */
    "HttpApiParameters": {
        /**
         * API端点的接入点地址。最大长度127个字符。
         * @example `http://127.0.0.1:8001/api
        `
         */
        Endpoint: string;
        /**
         * HTTP请求方法。
         * - GET
         * - POST
         * - HEAD
         * - DELETE
         * - PUT
         * - PATCH
         * @example `POST`
         */
        Method: string;
    };
}
