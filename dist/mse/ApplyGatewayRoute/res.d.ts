export interface ApplyGatewayRouteResponse {
    /**
     * 请求ID。
     * @example `1DB1AB36-8395-540E-AACC-7571D6B2057A`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 响应码。
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
     * 节点数据。
     * @example `true`
     */
    Data: boolean;
}
