export interface QuerySpeechResponse {
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
     * 语料详情。
     */
    Data: {
        /**
         * 语料播报声音。
         * @example `Siyue`
         */
        Voice: string;
        /**
         * 语料标识，当设备调用多个语料进行组合播报时，通过该标识播报指定的语料。
         * @example `identifying`
         */
        BizCode: string;
        /**
         * 语料ID。
         * @example `4de2c367****8c585e5992** `
         */
        SpeechCode: string;
        /**
         * 语料类型，分为自定义语料和常用语料。
         * @example `custom`
         */
        SpeechType: string;
        /**
         * 语料内容。
         * @example `test`
         */
        Text: string;
        /**
         * 播报速度。
         * @example `0`
         */
        SpeechRate: number;
        /**
         * 音量大小。
         * @example `50`
         */
        Volume: number;
        /**
         * 音频格式，仅支持**wav**、**mp3**、**amr**格式。
         * @example `wav`
         */
        AudioFormat: string;
        /**
         * 是否启用声码。
         * @example `true`
         */
        EnableSoundCode: boolean;
        /**
         * 声码配置。
         */
        SoundCodeConfig: {
            /**
             * 语料播放结束后的声码播放时长，单位为秒，取值范围为1～15。
             * @example `3`
             */
            AdditionalDuration: number;
            /**
             * 声码营销内容，例如商品的详情地址等。
             * @example `www.taobao.com`
             */
            SoundCodeContent: string;
        };
    };
}
