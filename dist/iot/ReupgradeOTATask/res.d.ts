export interface ReupgradeOTATaskResponse {
    /**
     * 调用失败时，返回的错误码。
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
     * @example `291438BA-6E10-4C4C-B761-243B9A0D324F`
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
