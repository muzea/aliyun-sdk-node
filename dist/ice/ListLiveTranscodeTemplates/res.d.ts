export interface ListLiveTranscodeTemplatesResponse {
    /**
     * 请求ID
     * @example `******3B-0E1A-586A-AC29-742247******`
     */
    RequestId: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 转码模版列表。
     */
    TemplateContentList: {
        /**
         * 模版名称。
         * @example `my_template`
         */
        Name: string;
        /**
         * 模板ID。
         * @example `9b1571b513cb44f7a1ba6ae561ff46f7`
         */
        TemplateId: string;
        /**
         * 模板类型。
         * @example `normal`
         */
        Type: string;
        /**
         * 模版类别。
         * @example `system`
         */
        Category: string;
        /**
         * 创建时间。
         * @example `2022-07-20T03:26:36Z`
         */
        CreateTime: string;
        /**
         * 模版配置。
         */
        TemplateConfig: {
            /**
             * 视频参数。
             */
            VideoParams: {
                /**
                 * 编码格式
                 * @example `264`
                 */
                Codec: string;
                /**
                 * 视频分辨率高。
                 * @example `1280`
                 */
                Height: string;
                /**
                 * 视频分辨率宽。
                 * @example `720`
                 */
                Width: string;
                /**
                 * 视频帧率
                 * @example `30`
                 */
                Fps: string;
                /**
                 * 视频码率。
                 * @example `2500`
                 */
                Bitrate: string;
                /**
                 * 视频Gop，单位：帧
                 * @example `1000`
                 */
                Gop: string;
                /**
                 * 编码级别。
                 * @example `3`
                 */
                Profile: string;
            };
            /**
             * 音频参数。
             */
            AudioParams: {
                /**
                 * 音频编码。
                 * @example `AAC`
                 */
                Codec: string;
                /**
                 * 音频码率。
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
                 * 编码级别。
                 * @example `aac_low`
                 */
                Profile: string;
            };
        };
    }[];
}
