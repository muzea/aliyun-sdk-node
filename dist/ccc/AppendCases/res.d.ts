export interface AppendCasesResponse {
    /**
     * 请求ID。
     * @example `BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
