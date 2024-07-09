export interface VerifySmsCodeResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 验证是否成功。取值：
     * - **true**：验证成功。
     * - **false**：验证失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `8906582E-6722`
     */
    RequestId: string;
}
