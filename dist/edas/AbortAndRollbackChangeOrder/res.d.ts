export interface AbortAndRollbackChangeOrderResponse {
    /**
     * 接口状态或 POP 错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `81E0B333-2871-****-****-B8F5FF43****`
     */
    RequestId: string;
    /**
     * 调用链ID。
     * @example `210f07bf1640239405712621******`
     */
    TraceId: string;
    /**
     * 错误码。
     * @example `success`
     */
    ErrorCode: string;
    /**
     * 变更单信息。
     */
    Data: {
        /**
         * 变更单ID。
         * @example `4f40e616-cdcd-4250-a018-efd459******`
         */
        ChangeOrderId: string;
    };
}
