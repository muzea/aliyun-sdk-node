export interface QuerySpeechListResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.speechsolution.NotSigned`
     */
    Code: string;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
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
     * 返回的语料列表。
     */
    Data: {
        /**
         * 每页返回的语料条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的语料总条数。
         * @example `100`
         */
        Total: number;
        /**
         * 当前页，从1开始，最大10000。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 语料列表信息。
             */
            Items: {
                /**
                 * 语料的语音场景。
                 * @example `Siyue`
                 */
                Voice: string;
                /**
                 * 语料标识。
                 * @example `identifying`
                 */
                BizCode: string;
                /**
                 * 语料ID。
                 * @example `4de2c367****8c585e5992**  `
                 */
                SpeechCode: string;
                /**
                 * 语料类型，分为自定义语料和常用语料。
                 * @example `custom`
                 */
                SpeechType: string;
                /**
                 * 语料的文本内容。
                 * @example `test`
                 */
                Text: string;
                /**
                 * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
                 * @example `wav`
                 */
                AudioFormat: string;
                SpeechList: {
                    /**
                     * 通用语料包的语料列表。
                     */
                    Items: {
                        /**
                         * 语料的文本内容。
                         * @example `test`
                         */
                        Text: string;
                        /**
                         * 语料的语音场景。
                         * @example `Siyue`
                         */
                        Voice: string;
                        /**
                         * 语料标识。
                         * @example `identifying`
                         */
                        BizCode: string;
                        /**
                         * 语料标识的ID。
                         * @example `4de2c367****8c585e5992**  `
                         */
                        SpeechCode: string;
                    }[];
                };
            }[];
        };
    };
}
