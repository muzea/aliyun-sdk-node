export interface SubmitMediaInfoJobResponse {
    /**
     * 媒体信息作业详细信息。
     */
    MediaInfoJob: {
        /**
         * 作业添加时间。
         * @example `2014-01-10T12:00:00Z`
         */
        CreationTime: string;
        /**
         * 作业状态。
         * - **Success**：成功。
         * - **Fail**：失败。
         * - **Analyzing**：分析中。
         * @example `Analyzing`
         */
        State: string;
        /**
         * 元信息分析作业ID。
         * @example `23ca1d184c0e4341e5b665e2a12****`
         */
        JobId: string;
        /**
         * 用户自定义数据。
         * @example `testid-001`
         */
        UserData: string;
        /**
         * 元信息分析失败时错误码。
         * @example `InvalidParameter.JsonObjectFormatInvalid`
         */
        Code: string;
        /**
         * 元信息分析失败时错误信息。
         * @example `The parameter ”*” does not conform to the JSON Object specification`
         */
        Message: string;
        /**
         * 管道ID。
         * @example `88c6ca184c0e432bbf5b665e2a15****`
         */
        PipelineId: string;
        /**
         * 是否异步。
         * @example `true`
         */
        Async: boolean;
        /**
         * 作业输入信息。
         */
        Input: {
            /**
             * 输入文件的OSS Object。
             * @example `example.flv`
             */
            Object: string;
            /**
             * 输入文件OSS的服务区域。
             * @example `example-location`
             */
            Location: string;
            /**
             * 输入文件的OSS Bucket。
             * @example `example-bucket`
             */
            Bucket: string;
        };
        /**
         * MNS通知用户作业完成的结果。
         */
        MNSMessageResult: {
            /**
             * 成功时消息ID。如果执行失败则不返回此参数。
             * @example `16f01ad6175e4230ac42bb5182cd****`
             */
            MessageId: string;
            /**
             * 失败时错误信息。如果执行成功则不返回此参数。
             * @example `InvalidParameter.JsonObjectFormatInvalid`
             */
            ErrorMessage: string;
            /**
             * 失败时错误码。如果执行成功则不返回此参数。
             * @example `The parameter \"Input\" does not conform to the JSON Object specification`
             */
            ErrorCode: string;
        };
        /**
         * 媒体文件属性。
         */
        Properties: {
            /**
             * 视频宽度，单位为px。
             * @example `1920`
             */
            Width: string;
            /**
             * 视频高度，单位为px。
             * @example `1080`
             */
            Height: string;
            /**
             * 总时长，单位为秒（s）。
             * @example `17.226000`
             */
            Duration: string;
            /**
             * 帧率。
             * @example `25`
             */
            Fps: string;
            /**
             * 码率。单位为Kbps。
             * @example `1630.045`
             */
            Bitrate: string;
            /**
             * 文件格式。
             * @example `QuickTime/MOV`
             */
            FileFormat: string;
            /**
             * 流信息。
             */
            Streams: {
                VideoStreamList: {
                    /**
                     * 视频流列表。列表元素至多4个。
                     */
                    VideoStream: {
                        /**
                         * 编码信号分辨率比。
                         * @example `1:1`
                         */
                        Sar: string;
                        /**
                         * 视频高度，单位为px。
                         * @example `1080`
                         */
                        Height: string;
                        /**
                         * 编码格式标记文本。
                         * @example `avc1`
                         */
                        CodecTagString: string;
                        /**
                         * 网络带宽消耗。
                         */
                        NetworkCost: {
                            /**
                             * 预加载时间。
                             * @example `8`
                             */
                            PreloadTime: string;
                            /**
                             * 平均码率，单位为Kbps。
                             * @example `300.34`
                             */
                            AvgBitrate: string;
                            /**
                             * 最大消耗带宽。
                             * @example `10`
                             */
                            CostBandwidth: string;
                        };
                        /**
                         * 视频宽度，单位为px。
                         * @example `1920`
                         */
                        Width: string;
                        /**
                         * 视频流序号。标识视频流在整个媒体流中的位置。某些播放平台可以指定起播的视频流序号，某些默认从1号起播。
                         * @example `1`
                         */
                        Index: string;
                        /**
                         * 时基。
                         * @example `1/24000`
                         */
                        Timebase: string;
                        /**
                         * 平均帧率。
                         * @example `23.976025`
                         */
                        AvgFPS: string;
                        /**
                         * 像素格式。
                         * @example `yuv420p`
                         */
                        PixFmt: string;
                        /**
                         * 语言。
                         * @example `eng`
                         */
                        Lang: string;
                        /**
                         * 编码格式长述名。
                         * @example `H.264/AVC/MPEG-4 AVC/MPEG-4 part 10`
                         */
                        CodecLongName: string;
                        /**
                         * 总帧数。
                         * @example `100`
                         */
                        NumFrames: string;
                        /**
                         * 视频旋转角度。
                         * @example `90`
                         */
                        Rotate: string;
                        /**
                         * 码率，单位Kbps。
                         * @example `1496.46`
                         */
                        Bitrate: string;
                        /**
                         * 是否有B帧。0表示无，1表示有。
                         * @example `0`
                         */
                        HasBFrames: string;
                        /**
                         * 编码预置。
                         * @example `High`
                         */
                        Profile: string;
                        /**
                         * 起始时间。
                         * @example `0.042000`
                         */
                        StartTime: string;
                        /**
                         * 编码显示分辨率比。Dar=视频宽度/视频高度，可以作为判断视频横竖屏的依据。
                         * @example `16:9`
                         */
                        Dar: string;
                        /**
                         * 编码格式简述名。可选值：
                         * - **h264**
                         * - **h265**
                         * - **gif**
                         * - **webp**
                         * @example `h264`
                         */
                        CodecName: string;
                        /**
                         * 时长，单位为秒（s）。
                         * @example `17.225542`
                         */
                        Duration: string;
                        /**
                         * 帧率。
                         * @example `25`
                         */
                        Fps: string;
                        /**
                         * 编码格式标记。
                         * @example `0x31637661`
                         */
                        CodecTag: string;
                        /**
                         * 编码时基。
                         * @example `1001/48000`
                         */
                        CodecTimeBase: string;
                        /**
                         * 编码等级。
                         * @example `41`
                         */
                        Level: string;
                        /**
                         * 色彩范围。
                         * @example `700`
                         */
                        ColorRange: string;
                        /**
                         * 色彩通道。
                         * @example `R255 G83 B170`
                         */
                        ColorTransfer: string;
                        /**
                         * 色原。
                         * @example `700`
                         */
                        ColorPrimaries: string;
                    }[];
                };
                AudioStreamList: {
                    /**
                     * 音频流列表。列表元素至多4个。
                     */
                    AudioStream: {
                        /**
                         * 时基。
                         * @example `1/44100`
                         */
                        Timebase: string;
                        /**
                         * 音频流序号。标识音频流在整个媒体流中的位置。
                         * @example `1`
                         */
                        Index: string;
                        /**
                         * 采样格式。
                         * @example `fltp`
                         */
                        SampleFmt: string;
                        /**
                         * 声道输出样式。
                         * @example `stereo`
                         */
                        ChannelLayout: string;
                        /**
                         * 语言。
                         * @example `eng`
                         */
                        Lang: string;
                        /**
                         * 采样率，单位Hz。
                         * @example `44100`
                         */
                        Samplerate: string;
                        /**
                         * 编码格式长述名。
                         * @example `AAC (Advanced Audio Coding)`
                         */
                        CodecLongName: string;
                        /**
                         * 声道数。
                         * @example `2`
                         */
                        Channels: string;
                        /**
                         * 总帧数。
                         * @example `123`
                         */
                        NumFrames: string;
                        /**
                         * 码率，单位为Kbps。
                         * @example `128.806`
                         */
                        Bitrate: string;
                        /**
                         * 编码格式标记文本。
                         * @example `mp4a`
                         */
                        CodecTagString: string;
                        /**
                         * 起始时间。
                         * @example `0.000000`
                         */
                        StartTime: string;
                        /**
                         * 编码格式简述名。默认值：acc。可取值：
                         * - **acc**
                         * - **mp3**
                         * - **mp4**
                         * - **ogg**
                         * - **flac**
                         * @example `aac`
                         */
                        CodecName: string;
                        /**
                         * 时长，单位为秒（s）。
                         * @example `17.159546`
                         */
                        Duration: string;
                        /**
                         * 编码格式标记。
                         * @example `0x6134706d`
                         */
                        CodecTag: string;
                        /**
                         * 编码时基。
                         * @example `1/44100`
                         */
                        CodecTimeBase: string;
                    }[];
                };
                SubtitleStreamList: {
                    /**
                     * 字幕流列表。列表元素至多4个。
                     */
                    SubtitleStream: {
                        /**
                         * 时基。
                         * @example `1/1000`
                         */
                        Timebase: string;
                        /**
                         * 字幕流序号。标识字幕流在整个媒体流中的位置。
                         * @example `3`
                         */
                        Index: string;
                        /**
                         * 起始时间。
                         * @example `0.000000`
                         */
                        StartTime: string;
                        /**
                         * 编码格式简述名。可选值：
                         * - **srt**
                         * - **ass**
                         * @example `ass`
                         */
                        CodecName: string;
                        /**
                         * 语言。
                         * @example `eng`
                         */
                        Lang: string;
                        /**
                         * 编码格式长述名。
                         * @example `ASS (Advanced SSA) subtitle`
                         */
                        CodecLongName: string;
                        /**
                         * 时长，单位为秒（s）。
                         * @example `1370.116000`
                         */
                        Duration: string;
                        /**
                         * 编码格式标记。
                         * @example `0x0000`
                         */
                        CodecTag: string;
                        /**
                         * 编码时基。
                         * @example `0/1`
                         */
                        CodecTimeBase: string;
                        /**
                         * 编码格式标记文本。
                         * @example `[0][0][0][0]`
                         */
                        CodecTagString: string;
                    }[];
                };
            };
            /**
             * 格式信息。
             */
            Format: {
                /**
                 * 起始时间。
                 * @example `0.000000`
                 */
                StartTime: string;
                /**
                 * 节目流总数。
                 * @example `0`
                 */
                NumPrograms: string;
                /**
                 * 文件大小，单位为字节（byte）。
                 * @example `3509895`
                 */
                Size: string;
                /**
                 * 媒体流总数。
                 * @example `2`
                 */
                NumStreams: string;
                /**
                 * 容器、封装格式长述名。
                 * @example `QuickTime/MOV`
                 */
                FormatLongName: string;
                /**
                 * 总时长，单位为秒（s）。
                 * @example `17.226000`
                 */
                Duration: string;
                /**
                 * 总码率，单位为Kbps。
                 * @example `1630.045`
                 */
                Bitrate: string;
                /**
                 * 容器、封装格式简述名。更多参数信息请参见[参数详情](~~29253~~)。
                 * @example `mov`
                 */
                FormatName: string;
            };
            /**
             * 文件大小，单位为字节（byte）。
             * @example `3509895`
             */
            FileSize: string;
        };
    };
    /**
     * 请求ID。
     * @example `62D9BE16-B7D5-550C-A482-7A0F60E09877`
     */
    RequestId: string;
}
