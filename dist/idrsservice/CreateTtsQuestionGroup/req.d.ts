export interface CreateTtsQuestionGroupRequest {
    /**
     * 请求参数
     */
    "Request": {
        /**
         * 发音人
         * @example `xiaoyun`
         */
        Voice: string;
        /**
         * 音频编码格式
         * @example `PCM`
         */
        Format: string;
        /**
         * 音量大小，取值范围：0~100。
         * @example `50`
         */
        Volume: number;
        /**
         * 音频采样率
         * @example `16000`
         */
        SampleRate: number;
        /**
         * 语速，取值范围：-500~500。
         * @example `50`
         */
        SpeechRate: number;
        /**
         * 音调，取值范围：-500~500。
         * @example `50`
         */
        PitchRate: number;
    };
}
