export interface QuerySpeechPushJobSpeechResponse {
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
     * @example `AF71BF1D-B552-47CD-B34B-352557627992`
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
     * 返回的语料推送任务下的语料详情。
     */
    Data: {
        /**
         * 每页返回的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询返回的数据总条数。
         * @example `1`
         */
        Total: number;
        /**
         * 当前页，从1开始。
         * @example `1`
         */
        PageId: number;
        List: {
            /**
             * 语料推送任务下的语料详情。
             */
            Items: {
                /**
                 * 语料类型，包括自定义语料和常用语料。
                 * @example `CUSTOM`
                 */
                SpeechType: string;
                /**
                 * 自定义语料的语料文本。
                 * @example `支付到账`
                 */
                Text: string;
                /**
                 * 自定义语料的语料播报声音。
                 * @example `Xiaoyun`
                 */
                Voice: string;
                /**
                 * 语料的标识。
                 * @example `ZFDZ`
                 */
                BizCode: string;
                SpeechList: {
                    /**
                     * 常用语料包的语料列表。
                     */
                    Items: {
                        /**
                         * 常用语料包的语料文本。
                         * @example `1`
                         */
                        Text: string;
                        /**
                         * 常用语料包的语料声音。
                         * @example `Xiaoyun`
                         */
                        Voice: string;
                        /**
                         * 常用语料包的语料标识。
                         * @example `SYS_TONE_0`
                         */
                        BizCode: string;
                    }[];
                };
            }[];
        };
    };
}
