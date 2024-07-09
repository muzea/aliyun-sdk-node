export interface UpdateCustomizedVoiceRequest {
    /**
     * 人声 Id
     * @example `xiaozhuan`
     */
    "VoiceId": string;
    /**
     * 示例音频媒资 Id
     * @example `****4d5e829d498aaf966b119348****`
     */
    "DemoAudioMediaId"?: string;
}
