export interface CreateFunctionTaskResponse {
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
     * @example `1638157990724`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `success`
     */
    Message: string;
    /**
     * 错误码
     * @example `Task.IsRunning`
     */
    Code: string;
    /**
     * 请求耗时（单位ms）
     * @example `123`
     */
    Latency: number;
}
