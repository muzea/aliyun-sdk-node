export interface RerunJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `A6BEAB33-03E6-4CE0-A94F-9E24C5512BAD`
     */
    RequestId: string;
    /**
     * 表示接口调用是否成功。
     * - **true**：调用成功，表示设备作业已重新执行。
     * - **false**：调用失败，表示设备作业未重新执行。
     * @example `true`
     */
    Success: boolean;
}
