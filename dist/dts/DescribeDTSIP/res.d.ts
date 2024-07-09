export interface DescribeDTSIPResponse {
    /**
     * 请求ID。
     * @example `0C99C0BE-F312-40FA-ADFA-4DC1166B****`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `InternalError`
     */
    ErrCode: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `The request processing has failed due to some unknown error.`
     */
    ErrMessage: string;
    /**
     * DTS服务的IP地址。
     * @example `10.151.12.0/24,47.102.181.0/24,47.101.109.0/24,120.55.129.0/24,11.115.103.0/24,47.102.234.0/24`
     */
    DynamicMessage: string;
    /**
     * 服务内部错误码，该参数即将下线。
     * @example `500`
     */
    DynamicCode: string;
}
