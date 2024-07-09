export interface QueryResellerAvailableQuotaResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用结果的附加信息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 用户可用配额余额信息
     * @example `300`
     */
    Data: string;
    /**
     * 请求ID
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
}
