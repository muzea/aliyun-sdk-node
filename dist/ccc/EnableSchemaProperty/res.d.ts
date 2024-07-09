export interface EnableSchemaPropertyResponse {
    /**
     * 请求ID。
     * @example `2778FA12-EDD6-42AA-9B15-AF855072E5E5`
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
     * 响应信息
     * @example `The operation is not allowed. User state (READY) does not meet expectations (OFFLINE).`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
