export interface UpdateGatewayRouteHTTPRewriteResponse {
    /**
     * 请求ID。
     * @example `AE60DA1E-B234-5105-897B-68372453A5A2`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
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
     * 返回数据
     * @example `411`
     */
    Data: number;
}
