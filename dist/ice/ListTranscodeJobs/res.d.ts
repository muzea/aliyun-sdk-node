export interface ListTranscodeJobsResponse {
    /**
     * 请求 id
     * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
     */
    RequestId: string;
    /**
     * 任务列表。
     */
    Jobs: {
        /**
         * 任务创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-01-12T08:49:41Z`
         */
        CreateTime: string;
        /**
         * 任务名。
         * @example `transcode-job`
         */
        Name: string;
        /**
         * 提交任务时请求 ID。
         * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
         */
        RequestId: string;
        /**
         * 主任务 ID。
         * @example `8b2198504dd340b7b3c9842a74fc****`
         */
        ParentJobId: string;
        /**
         * 子任务数量。
         * @example `1`
         */
        JobCount: number;
        /**
         * 任务状态。
         * - Success: 所有子任务完成后，有一个子任务则为成功。
         * - Fail: 所有子任务失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 任务来源。
         * - API: API。
         * - WorkFlow: 工作流,
         * - Console: 控制台。
         * @example `API`
         */
        TriggerSource: string;
        /**
         * 任务完成百分比。
         * @example `0`
         */
        Percent: number;
        /**
         * 任务提交时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-01-12T08:49:41Z`
         */
        SubmitTime: string;
        /**
         * 任务结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-01-12T08:49:41Z`
         */
        FinishTime: string;
        /**
         * 任务输入组。单个输入为转码任务。多个输入为音视频合流任务。
         */
        InputGroup: {
            /**
             * 媒体对象类型。
             * 取值：
             * - OSS: OSS文件。
             * - Media: 媒资 ID。
             * @example `OSS`
             */
            Type: string;
            /**
             * 媒体值：
             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
             * - type 为 Media 时，为媒资 ID。
             * @example `oss://bucket/path/to/video.mp4`
             */
            Media: string;
            /**
             * 媒资流地址，只有当对媒资流进行转码时填写此参数。
             * @example `oss://bucket/path/to/video.mp4`
             */
            InputUrl: string;
        }[];
        /**
         * 任务输出组。
         */
        OutputGroup: {
            /**
             * 输出媒体配置
             */
            Output: {
                /**
                 * 媒体对象类型。
                 * 取值：
                 * - OSS: OSS文件。
                 * - Media: 媒资 ID。
                 * @example `OSS`
                 */
                Type: string;
                /**
                 * 媒体值：
                 *       type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                 *       type 为 Media 时，为媒资 ID。
                 * @example `oss://bucket/path/to/video.mp4`
                 */
                Media: string;
                /**
                 * 转码输出流地址，仅当输出到媒资流时需要填此参数
                 * @example `oss://bucket/path/to/{MediaId}/{JobId}.mp4`
                 */
                OutputUrl: string;
            };
            /**
             * 任务处理配置。
             */
            ProcessConfig: {
                /**
                 * 转码配置。
                 */
                Transcode: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18****`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * video 设置。
                         */
                        Video: {
                            /**
                             * 编码格式。
                             * @example `H.264`
                             */
                            Codec: string;
                            /**
                             * 编码级别。支持baseline、main、high。
                             * - baseline：针对移动设备。
                             * - main：针对标准分辨率设备。
                             * - high：针对高分辨率设备。
                             * 默认值：high。
                             * @example `Main`
                             */
                            Profile: string;
                            /**
                             * 视频平均码率。
                             * - 取值范围：[10，50000]。
                             * - 单位：Kbps。
                             * @example `3000`
                             */
                            Bitrate: string;
                            /**
                             * 码率-质量控制因子。
                             * - 取值范围：[0，51]。
                             * - 默认值：编码格式为H264，默认值为23。编码格式为H265，默认值为26。
                             * 如果设置了Crf，则Bitrate的设置失效。
                             * @example `23`
                             */
                            Crf: string;
                            /**
                             * 宽。
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始宽度。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 高。
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始高度。
                             * @example `1080`
                             */
                            Height: string;
                            /**
                             * 帧率。
                             * - 取值范围：(0,60]。
                             * - 当输入文件帧率超过60时取60。
                             * - 默认值：取输入文件帧率。
                             * @example `25`
                             */
                            Fps: string;
                            /**
                             * 关键帧间最大帧数。
                             * - 取值范围：[1，1080000]。
                             * - 默认值：250。
                             * @example `250`
                             */
                            Gop: string;
                            /**
                             * 视频算法器预置。只有H264支持该参数。
                             * 支持veryfast、fast、medium、slow、slower。
                             * 默认值：medium。
                             * @example `medium`
                             */
                            Preset: string;
                            /**
                             * 扫描模式。
                             * 支持interlaced、progressive。
                             * @example `progressive`
                             */
                            ScanMode: string;
                            /**
                             * 视频颜色格式。
                             *          范围：yuv420p，yuvj420p等标准颜色格式。
                             * @example `yuv420p`
                             */
                            PixFmt: string;
                            /**
                             * 是否去掉视频。
                             * @example `false`
                             */
                            Remove: string;
                            /**
                             * 视频画面裁切。
                             *          支持2种方式。
                             *
                             * - 自动检测黑边并裁切，设置为“border”
                             * - 自定义裁切，参数格式：width:height:left:top。
                             *         示例：1280:800:0:140
                             * @example `1280:800:0:140`
                             */
                            Crop: string;
                            /**
                             * 视频贴黑边。
                             * - 参数格式：width:height:left:top。
                             * - 示例：1280:800:0:140
                             * @example `1280:800:0:140`
                             */
                            Pad: string;
                            /**
                             * 是否开启横竖屏自适应（即：长短边模式）
                             * @example `false`
                             */
                            LongShortMode: string;
                            /**
                             * 缓冲区大小。
                             * - 值范围：[1000，128000]
                             * - 默认值：6000
                             * - 单位：Kb
                             * @example `6000`
                             */
                            Bufsize: string;
                            /**
                             * 视频码率峰值。
                             *          值范围[10，50000]，单位Kbps。
                             * @example `9000`
                             */
                            Maxrate: string;
                            /**
                             * abr 最大码率（只有窄高1有效）
                             * 值范围[10，50000]，单位Kbps。
                             * @example `6000`
                             */
                            AbrMax: string;
                        };
                        /**
                         * audio 设置。
                         */
                        Audio: {
                            /**
                             * 音频编解码格式，AAC、MP3、VORBIS、FLAC。
                             *          默认值：AAC
                             * @example `AAC`
                             */
                            Codec: string;
                            /**
                             * 音频编码预置。
                             *          当Codec为 AAC时，范围aac_low、aac_he、aac_he_v2、aac_ld、aac_eld。
                             * @example `aac_low`
                             */
                            Profile: string;
                            /**
                             * 采样率。
                             * - 默认值：44100
                             * - 支持22050、32000、44100、48000、96000，
                             * - 单位：Hz
                             * @example `44100`
                             */
                            Samplerate: string;
                            /**
                             * 输出文件的音频码率。
                             * - 值范围：[8，1000]
                             * - 单位：Kbps
                             * - 默认值：128
                             * @example `128`
                             */
                            Bitrate: string;
                            /**
                             * 声道数。
                             *          默认值：2
                             * @example `2`
                             */
                            Channels: string;
                            /**
                             * 是否删除音频流。
                             * @example `false`
                             */
                            Remove: string;
                            /**
                             * 音量控制。
                             */
                            Volume: {
                                /**
                                 * 音量调整方式。
                                 * @example `auto`
                                 */
                                Method: string;
                                /**
                                 * 目标音量。
                                 * @example `-6`
                                 */
                                IntegratedLoudnessTarget: string;
                                /**
                                 * 最大峰值。
                                 * @example `-1`
                                 */
                                TruePeak: string;
                                /**
                                 * 音量范围。
                                 * @example `8`
                                 */
                                LoudnessRangeTarget: string;
                            };
                        };
                        /**
                         * 封装格式设置。
                         */
                        Container: {
                            /**
                             * 容器格式。
                             * @example `mp4`
                             */
                            Format: string;
                        };
                        /**
                         * 封装设置。
                         */
                        MuxConfig: {
                            /**
                             * 切片设置。
                             */
                            Segment: {
                                /**
                                 * 切片时长。
                                 * @example `10`
                                 */
                                Duration: string;
                                /**
                                 * 强制切片时间点。
                                 * @example `2,3`
                                 */
                                ForceSegTime: string;
                            };
                        };
                        Tags: any;
                    };
                };
                /**
                 * 图片水印配置。
                 */
                ImageWatermarks: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18****`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * 宽。
                         * @example `32`
                         */
                        Width: string;
                        /**
                         * 高。
                         * @example `32`
                         */
                        Height: string;
                        /**
                         * 水印位置，x
                         * @example `10`
                         */
                        Dx: string;
                        /**
                         * 水印位置，y
                         * @example `10`
                         */
                        Dy: string;
                        /**
                         * 参考位置：TopLeft, TopRight, BottomLeft, BottomRight  default: TopLeft
                         * @example `TopLeft`
                         */
                        ReferPos: string;
                        /**
                         * 显示时间设置。
                         */
                        Timeline: {
                            /**
                             * 开始时间。
                             * @example `00:00:05`
                             */
                            Start: string;
                            /**
                             * 显示时长，秒数或者 "ToEND"
                             * @example `ToEND`
                             */
                            Duration: string;
                        };
                        /**
                         * 水印图片文件。
                         */
                        File: {
                            /**
                             * 媒体对象类型。
                             * 取值：
                             * - OSS: OSS文件。
                             * - Media: 媒资 ID。
                             * @example `OSS`
                             */
                            Type: string;
                            /**
                             * 媒体值：
                             *       type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                             *       type 为 Media 时，为媒资 ID。
                             * @example `oss://bucket/path/to/video.mp4`
                             */
                            Media: string;
                        };
                    };
                }[];
                /**
                 * 文字水印配置。
                 */
                TextWatermarks: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18****`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * 水印文本，不需要 base64 encode，字符串需要 utf-8 编码。
                         * @example `测试水印`
                         */
                        Content: string;
                        /**
                         * 字体。
                         * @example `SimSun`
                         */
                        FontName: string;
                        /**
                         * 颜色。
                         * @example `#006400`
                         */
                        FontColor: string;
                        /**
                         * 透明度。
                         * @example `1.0`
                         */
                        FontAlpha: string;
                        /**
                         * 水印位置，距离上边距离。
                         * @example `10`
                         */
                        Top: string;
                        /**
                         * 水印位置，距离左边距离。
                         * @example `10`
                         */
                        Left: string;
                        /**
                         * 字体大小。
                         * @example `16`
                         */
                        FontSize: number;
                        /**
                         * 边框宽度。
                         * @example `0`
                         */
                        BorderWidth: number;
                        /**
                         * 边框颜色。
                         * @example `#006400`
                         */
                        BorderColor: string;
                        /**
                         * 根据输出视频大小调整字体 size。 true / false, default: false
                         * @example `false`
                         */
                        Adaptive: string;
                    };
                }[];
                /**
                 * 字幕压制配置。
                 */
                Subtitles: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18****`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * 字幕文件格式。
                         * @example `vtt`
                         */
                        Format: string;
                        /**
                         * 文件 encoding 格式。
                         * @example `UTF-8`
                         */
                        CharEnc: string;
                        /**
                         * 字幕文件。
                         */
                        File: {
                            /**
                             * 媒体对象类型。
                             * 取值：
                             * - OSS: OSS文件。
                             * - Media: 媒资 ID。
                             * @example `OSS`
                             */
                            Type: string;
                            /**
                             * 媒体值：
                             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                             * - type 为 Media 时，为媒资 ID。
                             * @example `oss://bucket/path/to/video.mp4`
                             */
                            Media: string;
                        };
                    };
                }[];
                /**
                 * 加密配置。
                 */
                Encryption: {
                    /**
                     * 加密类型。
                     * @example `PrivateEncryption`
                     */
                    EncryptType: string;
                    /**
                     * 标准加密的密钥密文。
                     * @example `MTYi00NDU0LTg5O****`
                     */
                    CipherText: string;
                    /**
                     * 标准加密的解密服务地址。
                     * @example `https://sample.com/path?CipherText=MTYi00NDU0LTg5O****`
                     */
                    DecryptKeyUri: string;
                };
                /**
                 * 多输入合流配置
                 */
                CombineConfigs: {
                    /**
                     * 音频流Index
                     * @example `0 或 exclude`
                     */
                    AudioIndex: string;
                    /**
                     * 视频流Index
                     * @example `0 或 exclude`
                     */
                    VideoIndex: string;
                    /**
                     * 输入流的开始时间。 默认为0
                     * @example `0.0`
                     */
                    Start: number;
                    /**
                     * 输入流的持续时间。 默认为视频时长。
                     * @example `20.0`
                     */
                    Duration: number;
                }[];
                /**
                 * 是否继承输入流的 tag。 当输入不是媒资是该参数不生效。 默认值：false
                 */
                IsInheritTags: boolean;
            };
        }[];
        /**
         * 用户数据。
         * @example `user-data`
         */
        UserData: string;
        /**
         * 任务调度配置。
         */
        ScheduleConfig: {
            /**
             * 管道 ID。
             * @example `e37ebee5d98b4781897f6086e89f****`
             */
            PipelineId: string;
            /**
             * 任务优先级。数字越大优先级越高，取值范围：1~10
             * @example `5`
             */
            Priority: number;
        };
    }[];
    /**
     * 下一页标识，第一次提交时为空即可。下一页标识将在第一次查询后返回。
     * @example `019daf5780f74831b0e1a767c9f1****`
     */
    NextPageToken: string;
}
