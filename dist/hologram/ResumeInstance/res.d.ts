export interface ResumeInstanceResponse {
    /**
     * Id of the request
     * @example `D3AE84AB-0873-5FC7-A4C4-8CF869D2FA70`
     */
    RequestId: string;
    /**
     * 返回结果,表示操作是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求结果，表示此次请求是否发生异常，和业务无关
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `null`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `null`
     */
    ErrorMessage: string;
    /**
     * http状态码。
     * @example `200`
     */
    HttpStatusCode: string;
}
