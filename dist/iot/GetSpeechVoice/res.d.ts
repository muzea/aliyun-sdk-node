export interface GetSpeechVoiceResponse {
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
     * @example `F94F72A5-82F0-496F-9AC2-3DBCFF77608A`
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
         * 返回的语料播报声音列表。
         */
        Items: {
            /**
             * 声音标签，标注声音的适用场景，例如通用场景、客服场景、童声场景等。
             * @example `通用场景`
             */
            Label: string;
            /**
             * 声音值。
             * @example `tongyong`
             */
            Value: string;
            VoiceList: {
                /**
                 * 播报声音列表。
                 */
                Items: {
                    /**
                     * 播报声音标签，标注声音的类型，例如标准男声、标准女声等。
                     * @example `小云,标准女声`
                     */
                    Label: string;
                    /**
                     * 播报声音值，需要填入**Voice**参数的API，例如：
                     * [CreateSpeech](~~217571~~)、[TestSpeech](~~217575~~)，传入该字段的值。
                     * @example `Xiaoyun`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
