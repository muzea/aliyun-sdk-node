export interface DeleteDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.prod.NullProductKey`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `入参产品ID没有赋值。`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `57b144cf-09fc-4916-a272-a62902d5b207`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `false`
     */
    Success: boolean;
}
