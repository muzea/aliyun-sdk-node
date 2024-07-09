export interface StartApplicationResponse {
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 变更流程ID，调用[GetChangeOrderInfo](~~62072~~)接口获取这次启动的执行进展。
     * @example `426d3328-11a***************`
     */
    ChangeOrderId: string;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `D16979DC-4D42-**************`
     */
    RequestId: string;
}
