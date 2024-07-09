export interface RRpcResponse {
    /**
     * 成功发送请求消息后，云端生成的消息ID，用于标识该消息。
     * @example `889455942124347392`
     */
    MessageId: number;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `41C4265E-F05D-4E2E-AB09-E031F501AF7F`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 设备返回结果Base64编码后的值。
     * @example `d29ybGQgaGVsbG8=`
     */
    PayloadBase64Byte: string;
    /**
     * 调用成功时，生成的调用返回码，标识请求状态。取值：
     * - **UNKNOWN**：系统异常。
     * - **SUCCESS**：成功 。
     * - **TIMEOUT**：设备响应超时。
     * - **OFFLINE**：设备离线。
     * - **HALFCONN**：设备离线（设备连接断开，但是断开时间未超过一个心跳周期）。
     * @example `SUCCESS`
     */
    RrpcCode: string;
}
