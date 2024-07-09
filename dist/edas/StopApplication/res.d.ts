export interface StopApplicationResponse {
    /**
     * 变更流程ID。可以通过调用GetChangeOrderInfo接口获取变更流程的详细信息，具体操作，请参见[GetChangeOrderInfo](~~62072~~)。
     * @example `a9557bac-ddd7-*********************`
     */
    ChangeOrderId: string;
    /**
     * Code码。
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
     * @example `D16979DC-4D42-****************`
     */
    RequestId: string;
}
