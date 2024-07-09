export interface UnbindSubscriptionResponse {
    /**
     * 请求状态码。
     * * 返回OK代表请求成功。
     * * 其他错误码详见[错误码列表](~~109196~~)。
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
     * @example `986BCB6D-C9BF-42F9-91CE-3A9901233D36`
     */
    RequestId: string;
    /**
     * 废弃参数。
     * @example `true`
     */
    ChargeId: string;
}
