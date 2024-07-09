export interface AsyncRRpcResponse {
    /**
     * 调用失败时，返回错误码。详细信息，请参见下文**错误码**。
     * @example `iot.device.InvalidFormattedDeviceName`
     */
    Code: string;
    /**
     * 成功发送请求消息后，云端生成的消息ID，用于标识该消息。
     * @example `889455942124347392`
     */
    MessageId: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `设备名称格式错误。`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
