export interface SubmitCustomizedVoiceJobRequest {
    /**
     * 人声 Id
     * @example `xiaozhuan`
     */
    "VoiceId": string;
    /**
     * 示例音频输出地址
     * - 如果传入此参数，则会在训练成功后在此参数表示的 OSS 地址生成示例音频
     * - 如果不传入此参数，则不会生成示例音频
     * ><notice>需要是您账号下合法的 OSS 公网地址></notice>
     * @example `https://your-bucket.oss-cn-shanghai.aliyuncs.com/demo.MP3`
     */
    "DemoAudioMediaURL"?: string;
}
