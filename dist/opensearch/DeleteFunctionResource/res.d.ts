export interface DeleteFunctionResourceResponse {
    /**
     * 状态码
     * - OK 成功
     * - FAIL 失败
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
     * @example `A4D487A9-A456-5AA5-A9C6-B7BF2889CF74`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    Message: string;
    /**
     * 返回的错误码（没有错误为空）
     * @example `""`
     */
    Code: string;
    /**
     * 请求耗时（单位毫秒）
     * @example `123`
     */
    Latency: number;
}
