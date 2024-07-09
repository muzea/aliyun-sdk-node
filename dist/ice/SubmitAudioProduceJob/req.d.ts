export interface SubmitAudioProduceJobRequest {
    /**
     * 音频生产配置：
     * - voice [声音类型](https://help.aliyun.com/document_detail/402424.html)
     * - customizedVoice 人声克隆的 VoiceId
     * - format 输出文件格式，支持：PCM/WAV/MP3
     * - volume 音量，取值0~100，默认值50
     * - speech_rate 语速，取值范围：-500～500，默认值：0
     * - pitch_rate 语调，取值范围：-500～500，默认值：0
     * > 如果同时传入voice和customizedVoice会优先使用customizedVoice。
     * @example `{"voice":"Siqi","format":"MP3","volume":50}`
     */
    "EditingConfig": string;
    /**
     * 音频输出配置
     * @example `例如将输出的语音存至：http://my_bucket.oss-cn-shanghai.aliyuncs.com/target_audio.mp3，则此参数配置为：
    {
          "bucket": "my_bucket",
          "object": "target_audio"
    }`
     */
    "OutputConfig": string;
    /**
     * 文本内容，最大支持2000个汉字。支持[SSML标记语言](https://help.aliyun.com/document_detail/2672807.html)。
     * @example `测试文本`
     */
    "InputConfig": string;
    /**
     * 任务标题。若不提供，根据日期自动生成默认title
     * - 长度不超过128字节
     * - UTF8编码
     * @example `任务标题。
    若不提供，根据日期自动生成默认title
    长度不超过128字节  UTF8编码`
     */
    "Title"?: string;
    /**
     * 任务描述：
     * - 长度不超过1024字节
     * - UTF8编码
     * @example `任务描述长度不超过1024字节  UTF8编码`
     */
    "Description"?: string;
    /**
     * 自定义设置，Json 格式，长度限制为 512 字节。支持[自定义回调地址配置](https://help.aliyun.com/document_detail/451631.html)。
     * @example `{"NotifyAddress":"http://xx.xx.xxx"}或{"NotifyAddress":"https://xx.xx.xxx"}或{"NotifyAddress":"ice-callback-demo"}`
     */
    "UserData"?: string;
    /**
     * 是否覆盖现有OSS文件。
     * @example `true`
     */
    "Overwrite"?: boolean;
}
