export interface UpdateGatewayDomainResponse {
    /**
     * 请求ID。
     * @example `6F6C6DE4-DB33-5791-B210-ED2E6FEFFE6F`
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
     * 返回码。
     * @example `403`
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
     * @example `94`
     */
    Data: number;
}
