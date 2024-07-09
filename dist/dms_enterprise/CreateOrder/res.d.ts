export interface CreateOrderResponse {
    CreateOrderResult: {
        /**
         * 创建成功的工单信息。
         */
        OrderIds: number[];
    };
    /**
     * 请求ID。
     * @example `427688B8-ADFB-4C4E-9D45-EF5C1FD6****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
}
