export interface DeleteGatewayServiceVersionResponse {
    /**
     * Id of the request
     * @example `29D52777-BE96-563E-BC6B-796ACE47A7A5`
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
     * - 当请求失败时，返回失败原因，例如：TaskId not found。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `1`
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
     * @example `1`
     */
    Data: number;
}
