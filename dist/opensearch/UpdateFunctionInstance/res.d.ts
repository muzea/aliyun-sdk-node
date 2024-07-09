export interface UpdateFunctionInstanceResponse {
    /**
     * 请求状态
     * -     OK 成功
     * -     FAIL 失败
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
     * @example `"3A809095-C554-5CF5-8FCE-BE19D4673790"`
     */
    RequestId: string;
    /**
     * 错误信息
     * @example `"instance not exist."`
     */
    Message: string;
    /**
     * 错误码
     * @example `"Instance.NotExist"`
     */
    Code: string;
    /**
     * 请求耗时（单位ms）
     * @example `10`
     */
    Latency: number;
}
