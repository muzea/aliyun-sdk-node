export interface AddGatewayResponse {
    /**
     * 请求ID。
     * @example `2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 网关唯一标识ID。
         * @example `gw-5017305290e14cebbrvec4a5****`
         */
        GatewayUniqueId: string;
    };
}
