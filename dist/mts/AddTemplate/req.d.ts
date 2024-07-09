export interface AddTemplateRequest {
    /**
     * 模板名称。最大长度128字节。
     * @example `mps-example`
     */
    "Name": string;
    /**
     * 容器，JSON对象，其中包含参数为Format（容器格式）。不设置Container参数则转码输出默认为mp4格式，如需其他格式则必须设置此对象。更多信息请参见[Container详情](~~29253~~)。
     * - 默认值：mp4。
     * - 视频转码支持flv、mp4、HLS（m3u8+ts）、MPEG-DASH（MPD+fMP4）。
     * > 容器格式为flv时，Video Codec不能设置为H.265。
     * - 音频转码支持mp3、mp4、ogg、flac、m4a。
     * - 图片支持gif、WEBP。
     * > 容器格式为gif时，VideoCodec设置只能设置为GIF。容器格式为webp时，Video Codec设置只能设置为WEBP。
     * @example `{"Format":"mp4"}`
     */
    "Container"?: string;
    /**
     * 视频流配置。JSON对象，更多信息请参见[Video详情](~~29253~~)。
     * > 不设置Video参数则转码输出不包括视频流；如需保留视频流则必须设置此对象。
     * @example `{"Codec":"H.264","Profile":"high","Bitrate":"500","Crf":"15","Width":"256","Height":"800","Fps":"25","Gop":"10s"}`
     */
    "Video"?: string;
    /**
     * 音频流配置。JSON对象，详情参见[Audio详情](~~29253~~)。
     * > 不设置Audio参数则转码输出不包括音频流；如需保留音频流则必须设置此对象。
     * @example `{"Codec":"H.264","Samplerate":"44100","Bitrate":"500","Channels":"2"}`
     */
    "Audio"?: string;
    /**
     * 转码通用配置。JSON对象，详情参见[TransConfig详情](~~29253~~)。不设置TransConfig参数则转码配置全部为默认值，如默认值不能满足您的转码需求则必须按需设置此对象。
     * @example `{"TransMode":"onepass"}`
     */
    "TransConfig"?: string;
    /**
     * 切片配置字段。JSON对象，详情参见[MuxConfig详情](~~29253~~)。不设置MuxConfig参数则转码输出不分片，如需分片则必须设置此对象。
     * @example `{"Segment":{"Duration":"10"}}`
     */
    "MuxConfig"?: string;
}
