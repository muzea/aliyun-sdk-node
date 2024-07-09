export interface UpdateFunctionResourceResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求ID
     * @example `7E375703-5B12-5466-8B48-C4D01AE1291A`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `Invalid request.`
     */
    Message: string;
    /**
     * 返回的错误码（没有错误为空）
     * @example `InvalidRequest`
     */
    Code: string;
    /**
     * 请求耗时（单位毫秒）
     * @example `123`
     */
    Latency: number;
}
