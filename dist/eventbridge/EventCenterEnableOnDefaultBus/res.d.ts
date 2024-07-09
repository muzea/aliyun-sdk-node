export interface EventCenterEnableOnDefaultBusResponse {
    /**
     * 错误说明。
     * @example `Unknown system error`
     */
    Message: string;
    /**
     * 本次请求的ID。
     * @example `1AD6D598-7506-5D2C-81EA-XXXXXXXX`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。取值说明如下：Success：成功。
     * @example `Success`
     */
    Code: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
}
