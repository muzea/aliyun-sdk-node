export interface SubmitHotlineTransferRegisterResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[API错误码](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 备案ID。
     * @example `2258****`
     */
    Data: number;
    /**
     * 请求ID。
     * @example `6086693B-2250-17CE-A41F-06259AB6DB1B`
     */
    RequestId: string;
}
