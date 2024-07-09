export interface QueryMediaInfoJobListResponse {
    NonExistMediaInfoJobIds: {
        /**
         * 不存在的媒体信息作业。
         */
        String: string[];
    };
    /**
     * 请求ID。
     * @example `46A04AA5-B119-41BB-B750-7C5327AC3E7A`
     */
    RequestId: string;
    MediaInfoJobList: {
        /**
         * 媒体信息作业列表。
         */
        MediaInfoJob: {
            /**
             * 作业添加时间。
             * @example `2014-01-10T12:00:00Z`
             */
            CreationTime: string;
            /**
             * 作业状态。
             * - **Analyzing**：分析中。
             * - **Success**：分析成功。
             * - **Fail**：分析失败。
             * @example `Success`
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
             * 是否为异步作业。
             * @example `true`
             */
            Async: boolean;
            /**
             * 作业输入。
             */
            Input: {
                /**
                 * OSS的Object。
                 * @example `example.mp4`
                 */
                Object: string;
                /**
                 * OSS的服务区域。
                 * @example `oss-cn-hangzhou`
                 */
                Location: string;
                /**
                 * 输入文件的OSS Bucket。
                 * @example `example-bucket`
                 */
                Bucket: string;
            };
            /**
             * MNS通知用户作业完成的消息结果。
             */
            MNSMessageResult: {
                /**
                 * 成功时消息ID。如果失败则不返回此参数。
                 * @example `123`
                 */
                MessageId: string;
                /**
                 * 失败时错误信息。如果成功则不返回此参数。
                 * @example `The parameter \"Input\" does not conform to the JSON Object specification`
                 */
                ErrorMessage: string;
                /**
                 * 失败时错误码。如果成功则不返回此参数。
                 * @example `InvalidParameter.JsonObjectFormatInvalid`
                 */
                ErrorCode: string;
            };
            /**
             * 媒体详细属性。更多信息请参见[数据类型AliyunProperties](~~29251~~)。
             */
            Properties: {
                /**
                 * 视频像素宽。
                 * @example `1280`
                 */
                Width: string;
                /**
                 * 视频像素长。
                 * @example `720`
                 */
                Height: string;
                /**
                 * 时长。
                 * @example `17.226000`
                 */
                Duration: string;
                /**
                 * 帧率。
                 * @example `25`
                 */
                Fps: string;
                /**
                 * 码率。
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
                         * 视频流信息列表。
                         */
                        VideoStream: {
                            /**
                             * 编码信号分辨率比。
                             * @example `1:1`
                             */
                            Sar: string;
                            /**
                             * 视频分辨率长。
                             * @example `1080`
                             */
                            Height: string;
                            /**
                             * 编码格式标记文本。
                             * @example `[0][0][0][0]`
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
                                 * 平均码率。
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
                             * 视频分辨率宽。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 视频流序号，标识视频流在整个媒体流中的位置。
                             * @example `1`
                             */
                            Index: string;
                            /**
                             * 时基。
                             * @example `1/1000`
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
                             * @example `180`
                             */
                            Rotate: string;
                            /**
                             * 码率。
                             * @example `30541090`
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
                             * 编码显示分辨率比。
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
                             * 时长。
                             * @example `100`
                             */
                            Duration: string;
                            /**
                             * 帧率。
                             * @example `25`
                             */
                            Fps: string;
                            /**
                             * 编码格式标记。
                             * @example `0x0000`
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
                         * 音频流信息列表。
                         */
                        AudioStream: {
                            /**
                             * 时基。
                             * @example `1/1000`
                             */
                            Timebase: string;
                            /**
                             * 音频流序号，标识音频流在整个媒体流中的位置。
                             * @example `1`
                             */
                            Index: string;
                            /**
                             * 采样格式。
                             * @example `fltp`
                             */
                            SampleFmt: string;
                            /**
                             * 声道数。
                             * @example `5.1(side)`
                             */
                            ChannelLayout: string;
                            /**
                             * 语言。更多信息请参见[FFmpeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html?spm=a2c4g.11186623.2.66.243851cd2SntfN#Metadata)。
                             * @example `eng`
                             */
                            Lang: string;
                            /**
                             * 采样率。
                             * @example `48000`
                             */
                            Samplerate: string;
                            /**
                             * 编码格式长述名。
                             * @example `DCA (DTS Coherent Acoustics)`
                             */
                            CodecLongName: string;
                            /**
                             * 声道输出样式。
                             * @example `2`
                             */
                            Channels: string;
                            /**
                             * 总帧数。
                             * @example `123`
                             */
                            NumFrames: string;
                            /**
                             * 码率。
                             * @example `1536000`
                             */
                            Bitrate: string;
                            /**
                             * 编码格式标记文本。
                             * @example `[0][0][0][0]`
                             */
                            CodecTagString: string;
                            /**
                             * 起始时间。
                             * @example `0.042000`
                             */
                            StartTime: string;
                            /**
                             * 编码格式简述名。可取值：
                             * - **acc**
                             * - **mp3**
                             * - **mp4**
                             * - **ogg**
                             * - **flac**
                             * @example `acc`
                             */
                            CodecName: string;
                            /**
                             * 时长。
                             * @example `123`
                             */
                            Duration: string;
                            /**
                             * 编码格式标记。
                             * @example `0x0000`
                             */
                            CodecTag: string;
                            /**
                             * 编码时基。
                             * @example `1/48000`
                             */
                            CodecTimeBase: string;
                        }[];
                    };
                    SubtitleStreamList: {
                        /**
                         * 字幕流信息列表。
                         */
                        SubtitleStream: {
                            /**
                             * 时基。
                             * @example `1/1000`
                             */
                            Timebase: string;
                            /**
                             * 字幕流序号，标识字幕流在整个媒体流中的位置。
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
                             * 时长，单位秒（s）。
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
                     * @example `0.042000`
                     */
                    StartTime: string;
                    /**
                     * 节目流总数。
                     * @example `2`
                     */
                    NumPrograms: string;
                    /**
                     * 文件大小。
                     * @example `3509895`
                     */
                    Size: string;
                    /**
                     * 媒体流总数。
                     * @example `1`
                     */
                    NumStreams: string;
                    /**
                     * 容器、封装格式长述名。
                     * @example `QuickTime/MOV`
                     */
                    FormatLongName: string;
                    /**
                     * 总时长。
                     * @example `17.226000`
                     */
                    Duration: string;
                    /**
                     * 总码率。
                     * @example `1630.045`
                     */
                    Bitrate: string;
                    /**
                     * 容器、封装格式简述名。
                     * @example `mov`
                     */
                    FormatName: string;
                };
                /**
                 * 文件大小。
                 * @example `3509895`
                 */
                FileSize: string;
            };
        }[];
    };
}
