export interface UpdateGatewayRouteHeaderOpResponse {
    /**
     * Id of the request
     * @example `7C8CB294-BED8-5F32-A416-7517725E8F27`
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
     * 状态码。说明 200表示成功。
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
     * @example `666`
     */
    Data: number;
}
