export interface ChangeResellerConsumeAmountResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 调用结果的附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 修改后对应的quota账本消费额度
     * @example `300.00`
     */
    Data: string;
    /**
     * 请求id。
     * @example `D6E068C3-25BC-455A-85FE-45F0B22ECB1F`
     */
    RequestId: string;
    /**
     * success=true代表调用执行完成。success=false代表执行出现错误。
     * @example `true`
     */
    Success: boolean;
}
