export interface GetLiveTranscodeTemplateResponse {
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 模版内容。
     */
    TemplateContent: {
        /**
         * 模板名称。
         * @example `my-template`
         */
        Name: string;
        /**
         * 模板ID。
         * @example `bcfa57950bc649b2abfb476ecd36ea4f`
         */
        TemplateId: string;
        /**
         * 模板类型。
         * @example `normal`
         */
        Type: string;
        /**
         * 模版类别。
         * - system: 系统
         * - customized: 自定义
         * @example `customized`
         */
        Category: string;
        /**
         * 模版创建时间。
         * @example `2022-07-25T06:15:14Z`
         */
        CreateTime: string;
        /**
         * 模版配置信息。
         */
        TemplateConfig: {
            /**
             * 视频参数。
             */
            VideoParams: {
                /**
                 * 编码类型。
                 * @example `H.264`
                 */
                Codec: string;
                /**
                 * 转码视频高度。
                 * @example `720`
                 */
                Height: string;
                /**
                 * 转码视频宽度。
                 * @example `1280`
                 */
                Width: string;
                /**
                 * 转码视频帧率。
                 * @example `30`
                 */
                Fps: string;
                /**
                 * 转码视频比特率。
                 * @example `2500`
                 */
                Bitrate: string;
                /**
                 * 视频GOP（Group of Picture）
                 * @example `1000`
                 */
                Gop: string;
                /**
                 * 编码级别。
                 * @example `2`
                 */
                Profile: string;
            };
            /**
             * 音频参数。
             */
            AudioParams: {
                /**
                 * 音频编码格式。
                 * @example `AAC`
                 */
                Codec: string;
                /**
                 * 转码音频比特率。
                 * @example `1000`
                 */
                Bitrate: string;
                /**
                 * 音频采样率。
                 * @example `44100`
                 */
                Samplerate: string;
                /**
                 * 声道数。
                 * @example `2`
                 */
                Channels: string;
                /**
                 * 音频编码预置。
                 * @example `1`
                 */
                Profile: string;
            };
        };
    };
}
