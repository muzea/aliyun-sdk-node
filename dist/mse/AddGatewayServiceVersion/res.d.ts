export interface AddGatewayServiceVersionResponse {
    /**
     * 请求ID。
     * @example `BA4046B6-CFC6-583C-B608-DD75011A590F`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `403`
     */
    HttpStatusCode: number;
    /**
     * 错误消息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。说明：200表示成功。
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
     * 网关服务ID。
     * @example `330`
     */
    Data: number;
}
