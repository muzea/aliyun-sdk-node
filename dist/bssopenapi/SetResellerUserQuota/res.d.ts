export interface SetResellerUserQuotaResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用结果的附加信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `F5B803CF-94D8-43AF-ADB3-D819AAD30E27`
     */
    RequestId: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
}
