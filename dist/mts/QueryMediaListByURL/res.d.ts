export interface QueryMediaListByURLResponse {
    MediaList: {
        /**
         * 媒体列表。
         */
        Media: {
            /**
             * 创建时间。
             * @example `2021-07-14T13:05:00Z`
             */
            CreationTime: string;
            /**
             * 类目ID。
             * @example `123`
             */
            CateId: number;
            /**
             * 查询到的媒体文件的高。
             * @example `360`
             */
            Height: string;
            /**
             * 视频审核状态。取值：
             * - **Initiated**：初始（上传成功审核未完成）。
             * - **Pass**：通过（上传成功审核已通过）。
             * @example `Initiated`
             */
            CensorState: string;
            Tags: {
                /**
                 * 标签信息。
                 */
                Tag: string[];
            };
            PlayList: {
                /**
                 * 播放列表。
                 */
                Play: {
                    /**
                     * 加密。取值：
                     * - **0**：未加密。
                     * - **1**：已加密。
                     * @example `1`
                     */
                    Encryption: string;
                    /**
                     * 高。
                     * @example `10`
                     */
                    Height: string;
                    /**
                     * 码率。
                     * @example `25.067`
                     */
                    Bitrate: string;
                    /**
                     * 播放文件。
                     */
                    File: {
                        /**
                         * 文件状态。取值范围：
                         * - **Normal**：正常。
                         * - **Deleted**：已删除。
                         * @example `Normal`
                         */
                        State: string;
                        /**
                         * 播放文件的输入OSS Bucket。
                         * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4l-test/in/1.mp4`
                         */
                        URL: string;
                    };
                    /**
                     * 产生播放文件的工作流ID。
                     * @example `6cc3aa66d1cb4bb2adf14e726c0a****`
                     */
                    MediaWorkflowId: string;
                    /**
                     * 宽。
                     * @example `11`
                     */
                    Width: string;
                    /**
                     * 大小。
                     * @example `100`
                     */
                    Size: string;
                    /**
                     * 帧率。
                     * @example `25.0`
                     */
                    Fps: string;
                    /**
                     * 时长。
                     * @example `7.965000`
                     */
                    Duration: string;
                    /**
                     * 媒体工作流活动名称。
                     * @example `test name`
                     */
                    ActivityName: string;
                    /**
                     * 编码格式。支持mov、mp4、m4a、3gp、3g2、mj2。
                     * @example `mov`
                     */
                    Format: string;
                    /**
                     * 产生播放文件的工作流。
                     * @example `example-mediaworkflow-****`
                     */
                    MediaWorkflowName: string;
                }[];
            };
            /**
             * 码率。
             * @example `593.192`
             */
            Bitrate: string;
            /**
             * 媒体ID。
             * @example `52d7e98b05e648199612290bb819****`
             */
            MediaId: string;
            /**
             * 输入文件详细信息。
             */
            File: {
                /**
                 * 文件状态。取值范围：
                 * - **Normal**：正常。
                 * - **Deleted**：已删除。
                 * @example `Normal`
                 */
                State: string;
                /**
                 * 输入文件的OSS Bucket。
                 * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4`
                 */
                URL: string;
            };
            SummaryList: {
                /**
                 * 视频摘要列表。
                 */
                Summary: {
                    /**
                     * 摘要类型。取值范围：
                     * - **Video**：视频类型。
                     * - **Gif**：动态图像类型。
                     * @example `Gif`
                     */
                    Type: string;
                    /**
                     * 产生摘要的工作流ID。
                     * @example `93ab850b4f6f44eab54b6e91d24d****`
                     */
                    MediaWorkflowId: string;
                    /**
                     * 媒体工作流活动名称。
                     * @example `example-activity-****`
                     */
                    ActivityName: string;
                    /**
                     * 产生摘要的工作流。
                     * @example `example-mediaworkflow-****`
                     */
                    MediaWorkflowName: string;
                    /**
                     * 原文件。
                     */
                    File: {
                        /**
                         * 文件状态。取值范围：
                         * - **Normal**：正常。
                         * - **Deleted**：已删除。
                         * @example `Normal`
                         */
                        State: string;
                        /**
                         * 输入文件的OSS Bucket。
                         * @example `http://example-bucket-****.o`
                         */
                        URL: string;
                    };
                }[];
            };
            /**
             * 媒体发布状态，表示是否对外发布媒体。取值范围：
             * - **Initiated**：初始。
             * - **UnPublish**：未发布，OSS播放文件权限为Private。
             * - **Published**：已发布，OSS播放文件权限为Default。
             * - **Deleted**：已删除。
             * @example `Published`
             */
            PublishState: string;
            /**
             * 媒体信息。
             */
            MediaInfo: {
                /**
                 * 流信息。
                 */
                Streams: {
                    VideoStreamList: {
                        /**
                         * 视频流列表。
                         */
                        VideoStream: {
                            /**
                             * 编码信号分辨率比。
                             * @example `1:1`
                             */
                            Sar: string;
                            /**
                             * 视频分辨率高。
                             * @example `360`
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
                                 * @example `0.01`
                                 */
                                PreloadTime: string;
                                /**
                                 * 平均码率。
                                 * @example `2659.326`
                                 */
                                AvgBitrate: string;
                                /**
                                 * 最大消耗带宽。
                                 * @example `100`
                                 */
                                CostBandwidth: string;
                            };
                            /**
                             * 视频分辨率宽，数字，不能为负数。
                             * @example `640`
                             */
                            Width: string;
                            /**
                             * 视频流序号，标识视频流在整个媒体流中的位置。
                             * @example `5`
                             */
                            Index: string;
                            /**
                             * 时基。
                             * @example `1/15360`
                             */
                            Timebase: string;
                            /**
                             * 平均帧率。
                             * @example `15.0`
                             */
                            AvgFPS: string;
                            /**
                             * 像素格式。
                             * @example `yuv420p`
                             */
                            PixFmt: string;
                            /**
                             * 语言。更多信息，请参见[FFmpeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)。
                             * @example `und`
                             */
                            Lang: string;
                            /**
                             * 编码格式长述名。
                             * @example `H.264/AVC/MPEG-4 AVC/MPEG-4 part 10`
                             */
                            CodecLongName: string;
                            /**
                             * 总帧数。
                             * @example `12`
                             */
                            NumFrames: string;
                            /**
                             * 视频旋转角度。
                             * @example `90`
                             */
                            Rotate: string;
                            /**
                             * 码率。
                             * @example `512.701`
                             */
                            Bitrate: string;
                            /**
                             * 是否有B帧。**1**表示有，**2**表示没有。
                             * @example `2`
                             */
                            HasBFrames: string;
                            /**
                             * 编码预置。
                             * @example `High`
                             */
                            Profile: string;
                            /**
                             * 起始时间。
                             * @example `0.046029`
                             */
                            StartTime: string;
                            /**
                             * 编码显示分辨率比。
                             * @example `16:9`
                             */
                            Dar: string;
                            /**
                             * 编码格式简述名。支持H264、mov、aac、avc、mpeg。
                             * @example `H264`
                             */
                            CodecName: string;
                            /**
                             * 时长。
                             * @example `79.200000`
                             */
                            Duration: string;
                            /**
                             * 帧率。
                             * @example `15.0`
                             */
                            Fps: string;
                            /**
                             * 编码格式标记。
                             * @example `0x31637661`
                             */
                            CodecTag: string;
                            /**
                             * 编码时基。
                             * @example `1/30`
                             */
                            CodecTimeBase: string;
                            /**
                             * 编码等级。
                             * @example `31`
                             */
                            Level: string;
                        }[];
                    };
                    AudioStreamList: {
                        /**
                         * 音频流列表。
                         */
                        AudioStream: {
                            /**
                             * 时基。
                             * @example `1/44100`
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
                             * 声道输出样式。
                             * @example `stereo`
                             */
                            ChannelLayout: string;
                            /**
                             * 语言。参考[FFmpeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)。
                             * @example `und`
                             */
                            Lang: string;
                            /**
                             * 采样率。
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
                             * @example `100`
                             */
                            NumFrames: string;
                            /**
                             * 码率。
                             * @example `76.356`
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
                             * 编码格式简述名。支持H264、mov、aac、avc、mpeg。
                             * @example `aac`
                             */
                            CodecName: string;
                            /**
                             * 时长。
                             * @example `79.203265`
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
                         * 字幕流列表。
                         */
                        SubtitleStream: {
                            /**
                             * 字幕流序号，标识字幕流在整个媒体流中的位置。
                             * @example `1`
                             */
                            Index: string;
                            /**
                             * 语言。参考[FFmpeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)。
                             * @example `und`
                             */
                            Lang: string;
                        }[];
                    };
                };
                /**
                 * 格式信息。
                 */
                Format: {
                    /**
                     * 开始时间。
                     * @example `0.000000`
                     */
                    StartTime: string;
                    /**
                     * 节目流总数。
                     * @example `0`
                     */
                    NumPrograms: string;
                    /**
                     * 大小。
                     * @example `5872904`
                     */
                    Size: string;
                    /**
                     * 媒体流总数。
                     * @example `2`
                     */
                    NumStreams: string;
                    /**
                     * 编码格式长述名。
                     * @example `QuickTime/MOV`
                     */
                    FormatLongName: string;
                    /**
                     * 时长。
                     * @example `79.204000`
                     */
                    Duration: string;
                    /**
                     * 码率。
                     * @example `593.192`
                     */
                    Bitrate: string;
                    /**
                     * 容器/封装格式简述名，支持mov，mp4，m4a，3gp，3g2，mj2。
                     * @example `mov`
                     */
                    FormatName: string;
                };
            };
            /**
             * 描述。
             * @example `This is description ****`
             */
            Description: string;
            /**
             * 文件大小。
             * @example `5872904`
             */
            Size: string;
            /**
             * 宽。
             * @example `640`
             */
            Width: string;
            /**
             * 封面的OSS Bucket。
             * @example `http://example-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example-****.png`
             */
            CoverURL: string;
            SnapshotList: {
                /**
                 * 截图列表。
                 */
                Snapshot: {
                    /**
                     * 截图类型。取值范围：
                     * - **Single**：单张。
                     * - **Sequence**：序列。
                     * @example `Single`
                     */
                    Type: string;
                    /**
                     * 产生截图文件的工作流ID。
                     * @example `6cc3aa66d1cb4bb2adf14e726c0a****`
                     */
                    MediaWorkflowId: string;
                    /**
                     * 产生截图文件的工作流活动名称。
                     * @example `example-activity1-****`
                     */
                    ActivityName: string;
                    /**
                     * 截图张数。此值只在**Type**为**Sequence**时有意义。
                     * @example `3`
                     */
                    Count: string;
                    /**
                     * 产生截图文件的工作流。
                     * @example `example-workflow-****`
                     */
                    MediaWorkflowName: string;
                    /**
                     * 截图文件。
                     */
                    File: {
                        /**
                         * 文件状态。取值范围：
                         * - **Normal**：正常。
                         * - **Deleted**：已删除。
                         * @example `Normal`
                         */
                        State: string;
                        /**
                         * 截图文件的OSS Bucket。
                         * @example `http://example1-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example111-****.png`
                         */
                        URL: string;
                    };
                }[];
            };
            RunIdList: {
                /**
                 * 媒体工作流列表。
                 */
                RunId: string[];
            };
            /**
             * 时长。
             * @example `79.204000`
             */
            Duration: string;
            /**
             * 帧率。
             * @example `15.0`
             */
            Fps: string;
            /**
             * 标题。
             * @example `kled.mp4`
             */
            Title: string;
            /**
             * 编码格式。支持mov，mp4，m4a，3gp，3g2，mj2。
             * @example `mov`
             */
            Format: string;
        }[];
    };
    NonExistFileURLs: {
        /**
         * 不存在的媒体列表信息。
         */
        FileURL: string[];
    };
    /**
     * 请求ID。
     * @example `1C8A0AEB-4321-485B-B4CB-DA4E9E6C9B42`
     */
    RequestId: string;
}
