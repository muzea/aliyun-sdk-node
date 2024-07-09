export interface DeleteFunctionInstanceResponse {
    /**
     * 状态码
     * - OK 成功
     * - FAIL 失败
     * @example `"OK"`
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
     * 错误信息，正常情况为空
     * @example `"instance not exist."`
     */
    Message: string;
    /**
     * 错误码，正常情况为空
     * @example `"Instance.NotExist"`
     */
    Code: string;
    /**
     * 请求耗时，单位ms
     * @example `10`
     */
    Latency: number;
}
