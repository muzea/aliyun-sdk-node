export interface DeleteSchemaResponse {
    /**
     * 请求ID。
     * @example `678F7002-CA01-4ABF-A112-585AFBDF3A3B`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
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
     * 响应参数。
     */
    Params: string[];
}
