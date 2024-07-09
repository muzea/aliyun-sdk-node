export interface UpdateGatewayRouteRetryResponse {
    /**
     * Id of the request
     * @example `9297B27D-D932-5E9F-93B9-99D6C5F3A879`
     */
    RequestId: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报错信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回代码。
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
     * @example `640`
     */
    Data: number;
}
