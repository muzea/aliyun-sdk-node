export interface SendVerificationResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 验证码是否发送成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `6086693B-2250-17CE-A41F-06259AB6DB1B`
     */
    RequestId: string;
}
