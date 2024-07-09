export interface ResetApplicationResponse {
    /**
     * 变更流程ID，调用[GetChangeOrderInfo](~~62072~~)接口获取这次重置具体执行进展。
     * @example `1c66548e-a082-40************`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
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
     * @example `D16979DC-4D42-*********`
     */
    RequestId: string;
}
