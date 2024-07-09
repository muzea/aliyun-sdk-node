export interface DisableSchemaPropertyResponse {
    /**
     * 请求ID
     * @example `9FBA26B0-462B-4D77-B78F-AF35560DBC71`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息
     * @example `User 244715989906081477 does not exist in instance worldfirst01.`
     */
    Message: string;
    /**
     * 参数信息。
     */
    Params: string[];
}
