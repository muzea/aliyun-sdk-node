export interface UpdateFunctionDefaultInstanceResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求id
     * @example `A4D487A9-A456-5AA5-A9C6-B7BF2889CF74`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 错误码
     * @example `DefaultInstance.SetFail`
     */
    Code: string;
    /**
     * 请求耗时（单位毫秒）
     * @example `123`
     */
    Latency: number;
}
