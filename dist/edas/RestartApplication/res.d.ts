export interface RestartApplicationResponse {
    /**
     * 变更流程ID。
     * 可以调用GetChangeOrderInfo接口查询此次重启的详细执行进展，具体操作，请参见[GetChangeOrderInfo](~~62072~~)。
     * @example `a9557bac-ddd7-*********************`
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
     * @example `D16979DC-4D42-****************`
     */
    RequestId: string;
}
