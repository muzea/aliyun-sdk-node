export interface StartPrivacyCallResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `0630E5DF-CEB0-445B-8626-D5C7481181C3`
     */
    RequestId: string;
    /**
     * 参数信息。
     */
    Params: string[];
    /**
     * 返回结果，通话ID。
     * @example `job-xxx`
     */
    Data: string;
}
