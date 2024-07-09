export interface RollbackApplicationResponse {
    /**
     * 变更流程ID。可以调用GetChangeOrderInfo接口获取此次回滚变更的详细执行进展，具体操作，请参见[GetChangeOrderInfo](~~423155~~)。
     * @example `921026b8-d1be-************`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-*********`
     */
    RequestId: string;
}
