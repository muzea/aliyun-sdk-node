export interface EventCenterDisableOnDefaultBusResponse {
    /**
     * 错误说明。
     * @example `Unknown system error`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `382E6272-8E9C-5681-AC96-XXXXXXXX`
     */
    RequestId: string;
    /**
     * 状态码。说明 Success表示成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
}
