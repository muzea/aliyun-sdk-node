export interface RollbackChangeOrderResponse {
    /**
     * 接口状态或POP错误码
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID
     * @example `B909AB1F-3763-4963-B1CE-0BDFA192****`
     */
    RequestId: string;
    /**
     * 调用链ID
     * @example `000000000000000000000000000000`
     */
    TraceId: string;
    /**
     * 错误码
     * @example `success`
     */
    ErrorCode: string;
    /**
     * 变更单信息
     */
    Data: {
        /**
         * 变更单ID
         * @example `4f40e616-cdcd-4250-a018-efd4599c****`
         */
        ChangeOrderId: string;
    };
}
