export interface UpdateGatewayRouteResponse {
    /**
     * 请求ID
     * @example `73785414-2C5B-5E28-BD91-B2C742269C48`
     */
    RequestId: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应描述
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码
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
     * 数据。
     * @example `337`
     */
    Data: number;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
}
