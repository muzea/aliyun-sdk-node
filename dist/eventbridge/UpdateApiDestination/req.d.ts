export interface UpdateApiDestinationRequest {
    /**
     * API 端点描述信息，最大长度255个字符。
     * @example `demo`
     */
    "Description"?: string;
    /**
     * 需要更新的API 端点名称，最大长度127个字符。最小长度2个字符。
     * @example `api-destination-name`
     */
    "ApiDestinationName": string;
    /**
     * 连接配置名称。最大长度127个字符。最小长度2个字符。
     * 提示 ：
     * 需要先调用Connection接口创建连接配置，ConnectionName填写已存在的连接名称
     * @example `connection-name`
     */
    "ConnectionName"?: string;
    /**
     * API 端点的配置信息
     */
    "HttpApiParameters"?: {
        /**
         * API 端点的接入点地址。最大长度127个字符。
         * @example `http://127.0.0.1:8001/api`
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
