export interface CallbackExtensionResponse {
    /**
     * 唯一的请求ID
     * @example `7C352CB7-CD88-50CF-9D0D-E81BDF020E7F`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * true：调用成功。
     * false：调用失败。
     * @example `true`
     */
    Success: string;
}
