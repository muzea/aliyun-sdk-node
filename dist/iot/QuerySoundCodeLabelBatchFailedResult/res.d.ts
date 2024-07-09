export interface QuerySoundCodeLabelBatchFailedResultResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.soundcodeservice.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `sound code service has not been signed`
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
    Data: {
        /**
         * 批次失败声码标签列表。
         */
        Items: {
            /**
             * 错误码。
             * @example `7541`
             */
            ResultCode: string;
            /**
             * 错误信息。
             * @example `sound code label exist`
             */
            ErrorMessage: string;
            /**
             * 标签。
             * @example `test`
             */
            Label: string;
        }[];
    };
}
