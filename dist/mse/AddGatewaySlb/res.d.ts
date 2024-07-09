export interface AddGatewaySlbResponse {
    /**
     * Id of the request
     * @example `316F5F64-F73D-42DC-8632-01E308B6****`
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
     * 返回数据。
     * @example `lb-uf6dqr4ondqi5w3df7hdf`
     */
    Data: string;
}
