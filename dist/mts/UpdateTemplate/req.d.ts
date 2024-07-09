export interface UpdateTemplateRequest {
    /**
     * 模板ID。可以从[新增自定义转码模板](~~213306~~)的返回参数中获取。
     * @example `16f01ad6175e4230ac42bb5182cd****`
     */
    "TemplateId": string;
    /**
     * 模板名称。最大长度128字节。
     * @example `MPS-example`
     */
    "Name": string;
    /**
     * 容器，JSON对象。默认值：**mp4**
     * - 视频转码支持flv、mp4、HLS（m3u8+ts）、MPEG-DASH（MPD+fMP4）。
     * - 音频转码支持mp3、mp4、ogg、flac、m4a。
     * - 图片支持gif、WEBP。
     * 更多信息请参见参数详情[Container详情](~~29253~~)。
     * @example `{"Format":"mp4"}`
     */
    "Container"?: string;
    /**
     * 视频流配置，JSON对象。更多信息请参见参数详情[Video详情](~~29253~~)。
     * @example `{"Codec":"H.264","Profile":"high","Bitrate":"500","Crf":"15","Width":"256","Height":"800","Fps":"25","Gop":"10"}`
     */
    "Video"?: string;
    /**
     * 音频流配置，JSON对象。更多信息请参见参数详情[Audio详情](~~29253~~)。
     * @example `{"Codec":"aac","Samplerate":"44100","Bitrate":"500","Channels":"2"}`
     */
    "Audio"?: string;
    /**
     * 封包配置，JSON对象。更多信息请参见参数详情[MuxConfig详情](~~29253~~)。
     * @example `{"Segment":{"Duration":"10"}}`
     */
    "MuxConfig"?: string;
    /**
     * 转码通用配置，JSON对象。更多信息请参见参数详情[TransConfig](~~29253~~)。
     * @example `{"TransMode":"onepass"}`
     */
    "TransConfig"?: string;
}
