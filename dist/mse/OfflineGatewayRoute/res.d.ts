export interface OfflineGatewayRouteResponse {
    /**
     * 请求ID。
     * @example `8EB24742-AB15-5953-BEFB-1FA18E770EEE`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报错信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回码。
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
     * 下线是否成功。
     * @example `true`
     */
    Data: boolean;
}
