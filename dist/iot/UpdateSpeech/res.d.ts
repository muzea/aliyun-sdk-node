export interface UpdateSpeechResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `千里传音解决方案未开通`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `66FF51D3-***-49F1-B1A2-***`
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
