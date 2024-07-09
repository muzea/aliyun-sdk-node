export interface RemoveCheckResultWhiteListResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `98C82076-E0D5-51DA-99F2-513F4XXXXXX`
     */
    RequestId: string;
    /**
     * 请求结果代号，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 附加信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求是否成功。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    Success: boolean;
}
