export interface UpdateLiveTranscodeTemplateRequest {
    /**
     * 模板ID。可以通过台[智能媒体服务控制台](https://ims.console.aliyun.com/summary)>模板管理>实时转码模板或[创建实时转码模板](~~449217~~)的返回参数中获取。
     * @example `****96e8864746a0b6f3****`
     */
    "TemplateId": string;
    /**
     * 模板名称。
     * @example `模板1130-2`
     */
    "Name"?: string;
    /**
     * 模版配置。
     */
    "TemplateConfig"?: {
        /**
         * 视频参数。
         */
        VideoParams: {
            /**
             * 编码类型。可选值：
             * - H.264
             * - H.265
             * @example `H.264`
             */
            Codec: string;
            /**
             * 转码视频高度。取值：
             * - Height ≥ 128
             * - max（Height,Width）≤ 2560
             * - min（Height,Width）≤ 1440
             * > H.265窄带高清模板不得超过1280×720。
             * @example `720`
             */
            Height: string;
            /**
             * 转码视频宽度。取值：
             * - Width ≥ 128
             * - max（Height,Width）≤ 2560
             * - min（Height,Width）≤ 1440
             * >H.265窄带高清模板不得超过1280×720。
             * @example `1280`
             */
            Width: string;
            /**
             * 转码视频帧率。单位：FPS，取值：1~60。
             * @example `30`
             */
            Fps: string;
            /**
             * 转码视频比特率。单位：kbps，取值：1~6000。
             * @example `2500`
             */
            Bitrate: string;
            /**
             * 视频GOP（Group of Picture）。单位：帧，取值：1~3000。
             * @example `1000`
             */
            Gop: string;
            /**
             * 编码级别。视频支持的一组特定的编码功能，一般值越大得到的画面质量越好，同时编解码消耗的资源也越高。取值：
             * - 1：baseline（适合移动设备）。
             * - 2：main（适合标准分辨率设备）。
             * - 3：high（适合高分辨率设备）。
             * @example `2`
             */
            Profile: string;
        };
        /**
         * 音频参数。
         */
        AudioParams: {
            /**
             * 音频编码格式。取值：
             * AAC
             * MP3
             * @example `AAC`
             */
            Codec: string;
            /**
             * 转码音频比特率。单位：kbps，取值：1~1000。
             * @example `100`
             */
            Bitrate: string;
            /**
             * 音频采样率。取值：22050~96000。
             * 注意如果AudioProfile取值为aac_ld，则采样率不能超过44100。
             * @example `44100`
             */
            Samplerate: string;
            /**
             * 音频声道数。取值
             * 1：单声道。
             * 2：双声道。
             * @example `2`
             */
            Channels: string;
            /**
             * 音频编码预置。当Codec为AAC时，取值：
             * - aac_low
             * - aac_he
             * - aac_he\_v2
             * - aac_ld
             * @example `aac_low`
             */
            Profile: string;
        };
    };
}
