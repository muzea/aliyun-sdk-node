export interface CreateProcCorrectOrderResponse {
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6E23D`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。仅请求失败时返回错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 工单ID。
     */
    CreateOrderResult: number[];
}
