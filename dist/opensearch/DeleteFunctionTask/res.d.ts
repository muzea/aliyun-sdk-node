export interface DeleteFunctionTaskResponse {
    /**
     * 请求状态
     * @example `OK`
     */
    Status: string;
    /**
     * HTTP响应码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 请求id
     * @example `"1081EB05-473C-5BF4-95BE-6D7CAD5E2213"`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `operation success`
     */
    Message: string;
    /**
     * 返回的错误码（没有错误为空）
     * @example `Task.UnableDelete`
     */
    Code: string;
    /**
     * api请求耗时（单位：毫秒）
     * @example `123`
     */
    Latency: number;
}
