export interface UpdateTemplateResponse {
    /**
     * 请求ID。
     * @example `5E4FB22E-B9EA-4E24-8FFC-B407EA71QW21`
     */
    RequestId: string;
    /**
     * 转码模板类型。
     */
    Template: {
        /**
         * 视频编解码配置。
         */
        Video: {
            /**
             * 是否开启横竖屏自适应（即：长短边模式）。
             * - 转码输出的宽对应输入片源的长边（竖屏为片源的高），高对应输入视频的短边（竖屏为片源的宽）。
             * - **true**表示开启。
             * - **false**表示关闭。
             * - 默认值：**false**。
             * @example `false`
             */
            LongShortMode: string;
            /**
             * 缓冲区大小。
             * - 单位：Kb。
             * - 默认值：**6000**。
             * @example `6000`
             */
            Bufsize: string;
            /**
             * 视频质量控制度。
             * @example `10`
             */
            Degrain: string;
            /**
             * 视频平均码率范围。
             */
            BitrateBnd: {
                /**
                 * 总码率上限。单位：Kbps。
                 * @example `500`
                 */
                Max: string;
                /**
                 * 总码率下限。单位：Kbps。
                 * @example `100`
                 */
                Min: string;
            };
            /**
             * 视频颜色格式。范围：yuv420p、yuvj420p等标准颜色格式。
             * @example `yuv420p`
             */
            PixFmt: string;
            /**
             * 视频贴黑边。
             * - 参数格式：width:height:left:top。
             * - 示例：1280:800:0:140。
             * @example `1280:800:0:140`
             */
            Pad: string;
            /**
             * 编解码格式。默认值：**H.264**。
             * @example `H.264`
             */
            Codec: string;
            /**
             * 高。
             * - 单位：px。
             * - 默认值：**视频原始高度**。
             * @example `800`
             */
            Height: string;
            /**
             * 独立去噪算法强度。
             * @example `1`
             */
            Qscale: string;
            /**
             * 视频画面裁切。支持2种方式：
             * - **自动检测黑边并裁切**：设置为“border”。
             * - **自定义裁切**：自定义格式进行裁剪。参数格式：width:height:left:top。示例：1280:800:0:140。
             * @example `border`
             */
            Crop: string;
            /**
             * 视频平均码率。单位：Kbps。
             * @example `200`
             */
            Bitrate: string;
            /**
             * 视频码率峰值。单位：(Kbps)。
             * @example `500`
             */
            Maxrate: string;
            /**
             * 最大帧率。
             * @example `60`
             */
            MaxFps: string;
            /**
             * 编码级别。
             * - **baseline**：针对移动设备。
             * - **main**：针对标准分辨率设备。
             * - **high**：针对高分辨率设备。
             * - 默认值：**high**。
             * @example `high`
             */
            Profile: string;
            /**
             * 码率-质量控制因子。
             * - 默认值：编码格式为H264，默认值为**23**。编码格式为H265，默认值为**26**。
             * - 如果设置了Crf，则Bitrate的设置失效。
             * @example `15`
             */
            Crf: string;
            /**
             * 是否删除视频流
             * - **true**表示删除。
             * - **false**表示保留。
             * - 默认值：**false**。
             * @example `false`
             */
            Remove: string;
            /**
             * 关键帧间最大帧数。默认值：**250**。
             * @example `10`
             */
            Gop: string;
            /**
             * 视频宽。
             * - 单位：px。
             * - 默认值：**视频原始宽度**。
             * @example `256`
             */
            Width: string;
            /**
             * 帧率。
             * - 当输入文件帧率超过60时取60。
             * - 默认值：取**输入文件帧率**。
             * @example `25`
             */
            Fps: string;
            /**
             * 视频算法器预置。默认值：**medium**。可选值：
             * - **veryfast**：超快。
             * - **fast**：快。
             * - **medium**：中等。
             * - **slow**：慢。
             * - **slower**：超慢。
             * @example `medium`
             */
            Preset: string;
            /**
             * 扫描模式。可选值：
             * - **interlaced**：交叉扫描。
             * - **progressive**：顺序扫描。
             * @example `interlaced`
             */
            ScanMode: string;
            /**
             * 分辨率调整优先级
             * @example `1`
             */
            ResoPriority: string;
            /**
             * 是否开启hdr2sdr功能。启用时会把hdr的视频转成sdr。
             * @example `true`
             */
            Hdr2sdr: string;
            /**
             * 窄带高清设置参数。
             */
            NarrowBand: {
                /**
                 * 窄带高清版本，可选值：1.0 。
                 * @example `1.0`
                 */
                Version: string;
                /**
                 * 动态码率上限，设置后平均码率范围 (0, 1000000]。
                 * @example `3000`
                 */
                Abrmax: number;
                /**
                 * 码率上限最大倍率，设置后 abrmax 不会超过视频源码率的 x 倍。范围 (0, 1.0]。
                 * @example `1.0`
                 */
                MaxAbrRatio: number;
            };
        };
        /**
         * 转码通用配置。
         */
        TransConfig: {
            /**
             * 是否检查音频码率。当输出音频码率大于媒体源音频码率时，则视为输出音频码率等于媒体源音频码率，即设置的音频码率参数不会生效。此值优先级小于IsCheckAudioBitrateFail。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：
             *     - 参数为空，并且codec和输入源不一样：false。
             *     - 参数为空，并且codec和输入源一样：true。
             * @example `false`
             */
            IsCheckAudioBitrate: string;
            /**
             * 转码模式。默认值：**onepass**。可选范围：
             * - **onepass**
             * - **twopass**
             * - **CBR**
             * @example `onepass`
             */
            TransMode: string;
            /**
             * 是否检查分辨率。如果输出分辨率大于输入分辨率（判断条件是宽或高），则输出分辨率等于输入分辨率。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：**false**。
             * @example `false`
             */
            IsCheckReso: string;
            /**
             * 是否检查视频码率。此值优先级大于IsCheckVideoBitrate。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：**false**。
             * @example `false`
             */
            IsCheckVideoBitrateFail: string;
            /**
             * 分辨率改写方式。默认值：**none**。可选值：
             * - rescale：范围拉伸
             * - crop：批量裁剪
             * - none：不改变。
             * @example `none`
             */
            AdjDarMethod: string;
            /**
             * 是否检查视频码率。如果视频输出码率大于视频输入码率，则视频输出码率等于视频输入码率。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：**false**。
             * @example `false`
             */
            IsCheckVideoBitrate: string;
            /**
             * 是否检查分辨率。如果输出分辨率大于输入分辨率（判断条件是宽或高），则返回转码失败。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：**false**。
             * @example `false`
             */
            IsCheckResoFail: string;
            /**
             * 是否检查音频码率。此值优先级大于IsCheckAudioBitrate。
             * - **true**表示检查。
             * - **false**表示不检查。
             * - 默认值：**false**。
             * @example `false`
             */
            IsCheckAudioBitrateFail: string;
        };
        /**
         * 模板的状态。
         * - **Normal**：正常。
         * - **Deleted**：已删除。
         * @example `Normal`
         */
        State: string;
        /**
         * 转码封包配置。
         */
        MuxConfig: {
            /**
             * Webp对应的封包配置。
             */
            Webp: {
                /**
                 * 循环次数。
                 * @example `0`
                 */
                Loop: string;
            };
            /**
             * Gif对应的封包配置。
             */
            Gif: {
                /**
                 * 终帧暂停时间。单位：毫秒（ms）。
                 * @example `false`
                 */
                FinalDelay: string;
                /**
                 * 调色板颜色抖动方式。抖动算法可选值为sierra算法和bayer算法。
                 * @example `bayer`
                 */
                DitherMode: string;
                /**
                 * 循环次数。
                 * @example `0`
                 */
                Loop: string;
                /**
                 * 自定义调色板功能。
                 * @example `0`
                 */
                IsCustomPalette: string;
            };
            /**
             * 切片配置。
             */
            Segment: {
                /**
                 * 分片时长。单位：秒（s）。
                 * @example `10`
                 */
                Duration: string;
            };
        };
        /**
         * 模板名称。
         * @example `MPS-example`
         */
        Name: string;
        /**
         * 音频编解码配置。
         */
        Audio: {
            /**
             * 音频编码预置。当**Codec**为**aac**时可选值：
             * - **aac_low**
             * - **aac_he**
             * - **aac_he_v2**
             * - **aac_ld**
             * - **aac_eld**
             * @example `aac_low`
             */
            Profile: string;
            /**
             * 是否删除音频流。
             * - **true**表示删除。
             * - **false**表示保留。
             * - 默认值：**false**。
             * @example `false`
             */
            Remove: string;
            /**
             * 音频编解码格式。默认值：**aac**。可选值：
             * - **aac**
             * - **mp3**
             * - **vorbis**
             * - **flac**
             * @example `aac`
             */
            Codec: string;
            /**
             * 采样率。
             * - 单位：Hz。
             * - 默认值：**44100**。
             * @example `44100`
             */
            Samplerate: string;
            /**
             * 独立去噪算法强度。
             * @example `1`
             */
            Qscale: string;
            /**
             * 声道数。默认值：**2**。
             * @example `2`
             */
            Channels: string;
            /**
             * 输出文件的音频码率。
             * - 取值范围：**\[8,1000\]**。
             * - 单位：Kbps。
             * - 默认值：**128**。
             * @example `500`
             */
            Bitrate: string;
            /**
             * 音量控制。
             */
            Volume: {
                /**
                 * 音量调整方式。可取值：
                 * - **auto**：自动调整。
                 * - **dynamic**：动态调整。
                 * - **linear**：线性调整。
                 * @example `auto`
                 */
                Method: string;
                /**
                 * 最大峰值。
                 * - 当指定Method为dynamic时生效。
                 * - 单位：db。
                 * - 值范围：[-9,0]。
                 * - 默认值：-1。
                 * @example `-1`
                 */
                TruePeak: string;
                /**
                 * 目标音量。
                 * - 当指定Method为dynamic时生效。
                 * - 单位：db。
                 * - 值范围：[-70,-5]。
                 * - 默认值：-6。
                 * @example `-6`
                 */
                IntegratedLoudnessTarget: string;
                /**
                 * 相对输入音频的音量提升的幅度。
                 * - 当指定Method为linear时生效。
                 * - 单位：db。
                 * - 值范围：不超过20db。
                 * - 默认值：-20db。
                 * @example `-20`
                 */
                Level: string;
                /**
                 * 相对目标音量的波动范围。
                 * - 当指定Method为dynamic时生效。
                 * - 单位：db。
                 * - 值范围：[1,20]。
                 * - 默认值：8。
                 * @example `8`
                 */
                LoudnessRangeTarget: string;
                /**
                 * 音量调整系数。
                 * 当指定Method为adaptive时生效。
                 * 值范围：[0,1]。
                 * 默认值：0.9。
                 * @example `0.9`
                 */
                PeakLevel: string;
            };
        };
        /**
         * 转码模板ID。
         * @example `16f01ad6175e4230ac42bb5182cd****`
         */
        Id: string;
        /**
         * 容器。
         */
        Container: {
            /**
             * 容器格式。
             * @example `mp4`
             */
            Format: string;
        };
    };
}
