export interface DeleteSmsSignResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8D****`
     */
    RequestId: string;
    /**
     * 签名名称。
     * @example `阿里云`
     */
    SignName: string;
}
