export interface UpdateGatewayRouteCORSResponse {
    /**
     * Id of the request
     * @example `41BE990E-44E4-5ED3-AEEB-A276941B1854`
     */
    RequestId: string;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报错信息。
     * @example `You are not authorized to perform this operation. `
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
     * 数据结构。
     * @example `618`
     */
    Data: number;
}
