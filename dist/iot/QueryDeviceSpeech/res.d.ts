export interface QueryDeviceSpeechResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `speech solution has not been signed`
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
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 每页返回的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 返回数据的总条数。
         * @example `200`
         */
        Total: number;
        /**
         * 当前页，从1开始。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 当前页的语料列表。
             */
            Items: {
                /**
                 * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
                 * @example `wav`
                 */
                AudioFormat: string;
                /**
                 * 语料标识。
                 * @example `ZFDZ`
                 */
                BizCode: string;
                /**
                 * 语料大小，单位KB。
                 * @example `16`
                 */
                Size: number;
            }[];
        };
    };
}
