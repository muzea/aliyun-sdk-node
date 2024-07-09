export interface CreateFunctionInstanceResponse {
    /**
     * 状态码
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
     * @example `98724351-D6B2-5D8A-B089-7FFD1821A7E9`
     */
    RequestId: string;
    /**
     * 错误信息，正常时为空
     * @example `version not exist.`
     */
    Message: string;
    /**
     * 错误码
     * @example `Version.NotExist`
     */
    Code: string;
    /**
     * 请求耗时，单位ms
     * @example `123`
     */
    Latency: number;
}
