export interface TtsCommonRequest {
    /**
     * 请求参数
     */
    "TtsRequest"?: {
        /**
         * appid
         * @example `d61be709-49d2-4cf1-b219-cd6181f72***`
         */
        AppId: string;
        /**
         * 文本
         * @example `北京的天气`
         */
        Text: string;
        /**
         * 发音人
         * @example `Xiaoyun`
         */
        Voice: string;
        /**
         * 音频编码格式
         * @example `WAV`
         */
        Format: string;
        /**
         * 音量
         * @example `50`
         */
        Volume: number;
        /**
         * 音频采样率
         * @example `16000`
         */
        SampleRate: number;
        /**
         * 语速
         * @example `50`
         */
        SpeechRate: number;
        /**
         * 语调
         * @example `50`
         */
        PitchRate: number;
    };
}
