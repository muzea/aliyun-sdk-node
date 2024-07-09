export interface ScaleOutApplicationResponse {
    /**
     * 变更流程ID。可以调用GetChangeOrderInfo接口获取这次扩容具体执行进展，更多信息，请参见[GetChangeOrderInfo](~~62072~~)。
     * @example `f4208118-7171-4e20-92************`
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
     * @example `D16979DC-4D42-***********************`
     */
    RequestId: string;
}
