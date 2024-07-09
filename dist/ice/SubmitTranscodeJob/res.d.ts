export interface SubmitTranscodeJobResponse {
    /**
     * 请求 ID
     * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
     */
    RequestId: string;
    /**
     * TranscodeParentJobWithSubJobDTO
     */
    TranscodeParentJob: {
        /**
         * 子任务列表。
         */
        TranscodeJobList: {
            /**
             * 任务创建时间。
             * @example `2022-01-12T08:49:41Z`
             */
            CreateTime: string;
            /**
             * 任务名。
             * @example `transcode-job`
             */
            Name: string;
            /**
             * 主任务 ID
             * @example `8b2198504dd340b7b3c9842a74fc9baa`
             */
            ParentJobId: string;
            /**
             * 子任务 ID
             * @example `7d6a7e0d4db2457a8d45ff5d43e1bf0a`
             */
            JobId: string;
            /**
             * 子任务在整个任务中的索引号。
             * @example `0`
             */
            JobIndex: number;
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
                 *
                 * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                 * - type 为 Media 时，为媒资 ID。
                 * @example `oss://bucket/path/to/video.mp4`
                 */
                Media: string;
                /**
                 * 输入流路径：
                 * - 仅当 type 为 Media 是才生效，让用户可以选择该媒资下的特定文件作为输入。
                 * - 系统会检查该媒资下是否存在这个 inputUrl。
                 * @example `oss://bucket/path/to/video.mp4
                `
                 */
                InputUrl: string;
            }[];
            /**
             * 转码处理配置。
             */
            ProcessConfig: {
                /**
                 * 转码配置。
                 */
                Transcode: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
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
                             * 编码级别。
                             * 支持baseline、main、high。
                             * - baseline：针对移动设备。
                             * - main：针对标准分辨率设备。
                             * - high：针对高分辨率设备。
                             * 默认值：high。
                             * @example `Main`
                             */
                            Profile: string;
                            /**
                             * 视频平均码率。
                             *
                             * - 取值范围：[10，50000]。
                             * - 单位：Kbps。
                             * @example `3000`
                             */
                            Bitrate: string;
                            /**
                             * 码率-质量控制因子。
                             *
                             * - 取值范围：[0，51]。
                             * - 默认值：编码格式为H264，默认值为23。编码格式为H265，默认值为26。
                             * 如果设置了Crf，则Bitrate的设置失效。
                             * @example `23`
                             */
                            Crf: string;
                            /**
                             * 宽。
                             *
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始宽度。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 高。
                             *
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始高度。
                             * @example `1080`
                             */
                            Height: string;
                            /**
                             * 帧率。
                             *
                             * - 取值范围：(0,60]。
                             * - 当输入文件帧率超过60时取60。
                             * - 默认值：取输入文件帧率。
                             * @example `25`
                             */
                            Fps: string;
                            /**
                             * 关键帧间最大帧数。
                             *
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
                             * 视频画面裁切，支持2种方式。
                             *
                             * - 自动检测黑边并裁切，设置为“border”
                             * - 自定义裁切，参数格式：width:height:left:top。示例：1280:800:0:140
                             * @example `1280:800:0:140`
                             */
                            Crop: string;
                            /**
                             * 视频贴黑边
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
                             * 缓冲区大小
                             *
                             * - 值范围：[1000，128000]
                             * - 默认值：6000
                             * - 单位：Kb
                             * @example `6000`
                             */
                            Bufsize: string;
                            /**
                             * 视频码率峰值
                             * 值范围[10，50000]，单位Kbps。
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
                             *
                             * - 默认值：44100
                             * - 支持22050、32000、44100、48000、96000，
                             * - 单位：Hz
                             * @example `44100`
                             */
                            Samplerate: string;
                            /**
                             * 输出文件的音频码率。
                             *
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
                        /**
                         * 条件转码参数。
                         */
                        TransConfig: {
                            /**
                             * 视频转码模式。取值：
                             * - onepass（默认值）：一般用于ABR。编码速度较twopass更快。
                             * - twopass：一般用于VBR。编码速度较onepass更慢。
                             * - CBR：固定码率模式。
                             * @example `onepass`
                             */
                            TransMode: string;
                            /**
                             * 是否检查视频分辨率。IsCheckReso和IsCheckResoFail只支持二选一，IsCheckResoFail优先级更高。
                             * - true：检查。当输入视频分辨率（宽或高）小于输出设置时，按输入视频分辨率转码。
                             * - false（默认值）：不检查。
                             * @example `true`
                             */
                            IsCheckReso: string;
                            /**
                             * 是否检查视频分辨率。IsCheckReso和IsCheckResoFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入视频分辨率（宽或高）小于输出设置时，返回转码失败。
                             * - false（默认值）：不检查。
                             * @example `true`
                             */
                            IsCheckResoFail: string;
                            /**
                             * 是否检查视频码率。IsCheckVideoBitrate和IsCheckVideoBitrateFail只支持二选一，IsCheckVideoBitrateFail优先级更高。
                             * - true：检查。当输入视频码率小于输出设置时，按输入视频码率转码。
                             * - false（默认值）：不检查。
                             * @example `true`
                             */
                            IsCheckVideoBitrate: string;
                            /**
                             * 是否检查视频码率。IsCheckVideoBitrate和IsCheckVideoBitrateFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入视频码率小于输出设置时，返回转码失败。
                             * - false（默认值）：不检查。
                             * @example `true`
                             */
                            IsCheckVideoBitrateFail: string;
                            /**
                             * 是否检查音频码率。IsCheckAudioBitrate和IsCheckAudioBitrateFail只支持二选一，IsCheckAudioBitrateFail优先级更高。
                             * - true：检查。当输入音频码率小于输出设置时，按输入音频码率转码。
                             * - false：不检查。
                             * 默认值规则：
                             * - 参数为空，并且codec和输入源不一样：false。
                             * - 参数为空，并且codec和输入源一样：true。
                             * @example `true`
                             */
                            IsCheckAudioBitrate: string;
                            /**
                             * 是否检查音频码率。IsCheckAudioBitrate和IsCheckAudioBitrateFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入音频码率小于输出设置时，返回转码失败。
                             * - false（默认值）：不检查。
                             * @example `true`
                             */
                            IsCheckAudioBitrateFail: string;
                            /**
                             * 分辨率改写方式。当Width或Height都填写时才生效，可以和LongShortMode搭配使用。
                             * 可选值：rescale、crop、pad、none。
                             * 默认值：none。
                             * @example `none`
                             */
                            AdjDarMethod: string;
                        };
                    };
                };
                /**
                 * 图片水印配置。
                 */
                ImageWatermarks: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * 输出视频上水印图片宽。
                         * 值有两种形式：
                         * - 整数型代水印图片宽的像素值。
                         *   - 范围：[8,4096]
                         *   - 单位：px
                         * - 小数型代表相对输出视频分辨率宽的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃。
                         * @example `32`
                         */
                        Width: string;
                        /**
                         * 输出视频上水印图片高。
                         * 值有两种形式：
                         * - 整数型代水印图片高的像素值。
                         *   - 范围：[8,4096]
                         *   - 单位：px
                         * - 小数型代表相对输出视频分辨率高的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃。
                         * @example `32`
                         */
                        Height: string;
                        /**
                         * 水印图片相对输出视频的水平偏移量。
                         * 默认值：0
                         * 值有两种形式：
                         * - 整数型代表偏移像素。
                         *   - 范围：[8，4096]
                         *   - 单位：px
                         * - 小数型代表水平偏移量与输出分辨率宽的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃
                         * @example `10`
                         */
                        Dx: string;
                        /**
                         * 水印图片相对输出视频的垂直偏移量。
                         * 默认值：0
                         * 值有两种形式：
                         * - 整数型代表偏移像素。
                         *   - 范围[8，4096]
                         *   - 单位：px
                         * - 小数型代表垂直偏移量与输出分辨率高的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃
                         * @example `10`
                         */
                        Dy: string;
                        /**
                         * 水印的位置。
                         * - 可取值：TopRight（右上）、TopLeft（左上）、BottomRight（右下）、BottomLeft（左下）
                         * - 默认值：TopRight
                         * @example `TopLeft`
                         */
                        ReferPos: string;
                        /**
                         * 动态水印，显示时间设置。
                         */
                        Timeline: {
                            /**
                             * 水印开始出现时间。
                             * - 单位：秒
                             * - 取值范围：数字
                             * - 默认值：0
                             * @example `00:00:05`
                             */
                            Start: string;
                            /**
                             * 水印持续时间。
                             * - 取值范围：[数字，ToEND]
                             * - 默认值：ToEND
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
                             *
                             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                             * - type 为 Media 时，为媒资 ID。
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
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数
                     */
                    OverwriteParams: {
                        /**
                         * 水印文本，不需要 base64 encode，字符串需要 utf-8 编码。
                         * @example `测试水印`
                         */
                        Content: string;
                        /**
                         * 字体。默认：SimSun。
                         * @example `SimSun`
                         */
                        FontName: string;
                        /**
                         * 颜色。
                         * @example `#006400`
                         */
                        FontColor: string;
                        /**
                         * 字体透明度。
                         * - 范围：(0, 1]
                         * - 默认：1.0
                         * @example `1.0`
                         */
                        FontAlpha: string;
                        /**
                         * 文本上边距。
                         * - 默认：0
                         * - 范围：[0,4096]
                         * @example `10`
                         */
                        Top: string;
                        /**
                         * 文本左边距。
                         * - 默认：0
                         * - 范围：[0,4096]
                         * @example `10`
                         */
                        Left: string;
                        /**
                         * 字体大小。
                         * - 默认值：16
                         * - 范围：(4, 120)
                         * @example `16`
                         */
                        FontSize: number;
                        /**
                         * 描边宽度。
                         * - 默认：0
                         * - 范围：(0,4096]
                         * @example `0`
                         */
                        BorderWidth: number;
                        /**
                         * 描边颜色。
                         * 默认：Black
                         * 更多取值请参见BorderColor。
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
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
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
                             *
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
                    /**
                     * 密钥服务类型。目前仅支持KMS和Base64
                     * @example `KMS`
                     */
                    KeyServiceType: string;
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
            };
            /**
             * 输出媒体配置。
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
                 *
                 * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                 * - type 为 Media 时，为媒资 ID。
                 * @example `oss://bucket/path/to/video.mp4`
                 */
                Media: string;
                /**
                 * 输出流路径：
                 *       仅当 Type 为 Media时才生效，让用户可以选择该媒资下特定文件作为输出。
                 *       支持的占位符：
                 * - {MediaId}：媒资ID。
                 * - {JobId}：转码子任务ID。
                 * - {MediaBucket}：媒资ID所在的Bucket。
                 * - {ExtName}：文件后缀，取转码模板的输出格式。
                 * - {DestMd5}：转码输出文件的MD5值。
                 *  说明：
                 * 1. 该参数必须包含{MediaId} 和 {JobId} 两个占位符。
                 * 2. 输出的Bucket与MediaId所在Bucket相同。
                 * @example `oss://bucket/path/to/{MediaId}/{JobId}.mp4
                `
                 */
                OutputUrl: string;
            };
            /**
             * 用户数据。
             * @example `user-data`
             */
            UserData: string;
            /**
             * 任务调度信息。
             */
            ScheduleConfig: {
                /**
                 * 管道 ID。
                 * @example `e37ebee5d98b4781897f6086e89f9c56`
                 */
                PipelineId: string;
                /**
                 * 任务优先级。数字越大优先级越高，取值范围：1~10
                 * @example `5`
                 */
                Priority: number;
            };
            /**
             * 转码任务状态
             * - Init：已提交
             * - Processing：转码中
             * - Success：转码成功
             * - Fail：转码失败
             * - Deleted：已删除
             * @example `Init`
             */
            Status: string;
            /**
             * 任务生成视频 Media 信息。
             */
            OutFileMeta: {
                /**
                 * 基础文件信息。
                 */
                FileBasicInfo: {
                    /**
                     * 媒资 ID。
                     * @example `73e07de0f77171eca3fc7035d0b26402`
                     */
                    MediaId: string;
                    /**
                     * 文件名。
                     * @example `file.m3u8`
                     */
                    FileName: string;
                    /**
                     * 文件状态。
                     * @example `Normal`
                     */
                    FileStatus: string;
                    /**
                     * 文件类型。取值：source_file, transcode_file
                     * @example `source_file`
                     */
                    FileType: string;
                    /**
                     * 文件大小。单位：Byte。
                     * @example `31737`
                     */
                    FileSize: string;
                    /**
                     * 文件 URL。
                     * @example `http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8`
                     */
                    FileUrl: string;
                    /**
                     * 文件所在区域。
                     * @example `cn-shanghai`
                     */
                    Region: string;
                    /**
                     * 视频格式名称。
                     * @example `hls,applehttp`
                     */
                    FormatName: string;
                    /**
                     * 视频时长（单位：秒）。
                     * @example `403.039999`
                     */
                    Duration: string;
                    /**
                     * 视频码率。
                     * @example `888.563`
                     */
                    Bitrate: string;
                    /**
                     * 宽。
                     * @example `848`
                     */
                    Width: string;
                    /**
                     * 高。
                     * @example `478`
                     */
                    Height: string;
                };
                /**
                 * 音频流信息。
                 */
                AudioStreamInfoList: {
                    /**
                     * 流序号。
                     * @example `1`
                     */
                    Index: string;
                    /**
                     * 编码格式。
                     * @example `aac`
                     */
                    CodecName: string;
                    /**
                     * 编码格式名。
                     * @example `AAC (Advanced Audio Coding)`
                     */
                    CodecLongName: string;
                    /**
                     * 编码器时间基。
                     * @example `1/44100`
                     */
                    CodecTimeBase: string;
                    /**
                     * 编码器标签名。
                     * @example `[15][0][0][0]`
                     */
                    CodecTagString: string;
                    /**
                     * 编码器标签。
                     * @example `0x000f`
                     */
                    CodecTag: string;
                    /**
                     * 采样格式。
                     * @example `fltp`
                     */
                    SampleFmt: string;
                    /**
                     * 采样率（单位：Hz）。
                     * @example `44100`
                     */
                    SampleRate: string;
                    /**
                     * 声道数。
                     * @example `2`
                     */
                    Channels: string;
                    /**
                     * 声道布局。
                     * @example `stereo`
                     */
                    ChannelLayout: string;
                    /**
                     * 时间基。
                     * @example `1/90000`
                     */
                    Timebase: string;
                    /**
                     * 开始时间。
                     * @example `1.473556`
                     */
                    StartTime: string;
                    /**
                     * 时长（单位：秒）。
                     * @example `403.039989`
                     */
                    Duration: string;
                    /**
                     * 码率。
                     * @example `0.f`
                     */
                    Bitrate: string;
                    /**
                     * 语言。
                     * @example `cn`
                     */
                    Lang: string;
                }[];
                /**
                 * 视频流信息。
                 */
                VideoStreamInfoList: {
                    /**
                     * 流序号。
                     * @example `0`
                     */
                    Index: string;
                    /**
                     * 编码格式。
                     * @example `h264`
                     */
                    Codec_name: string;
                    /**
                     * 编码格式名。
                     * @example `H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10`
                     */
                    Codec_long_name: string;
                    /**
                     * 编码器预设。
                     * @example `High`
                     */
                    Profile: string;
                    /**
                     * 编码时基。
                     * @example `1/50`
                     */
                    Codec_time_base: string;
                    /**
                     * 编码格式标记文本。
                     * @example `[27][0][0][0]`
                     */
                    Codec_tag_string: string;
                    /**
                     * 编码格式标记。
                     * @example `0x001b`
                     */
                    Codec_tag: string;
                    /**
                     * 宽。
                     * @example `848`
                     */
                    Width: string;
                    /**
                     * 高。
                     * @example `478`
                     */
                    Height: string;
                    /**
                     * 是否有B帧。
                     * 取值：
                     * - 0: 没有 B 帧,
                     * - 1: 有一个 B 帧,
                     * - 2: 有多个连续 B 帧。
                     * @example `2`
                     */
                    Has_b_frames: string;
                    /**
                     * 采集点数宽高比。
                     * @example `478:477`
                     */
                    Sar: string;
                    /**
                     * 图像显示宽高比。
                     * @example `16:9`
                     */
                    Dar: string;
                    /**
                     * 颜色存储格式。
                     * @example `yuv420p`
                     */
                    PixFmt: string;
                    /**
                     * 编码等级。
                     * @example `31`
                     */
                    Level: string;
                    /**
                     * 帧率。
                     * @example `25.0`
                     */
                    Fps: string;
                    /**
                     * 平均帧率。
                     * @example `25.0`
                     */
                    Avg_fps: string;
                    /**
                     * 时基。
                     * @example `1/90000`
                     */
                    Time_base: string;
                    /**
                     * 起始时间。
                     * @example `1.473556`
                     */
                    Start_time: string;
                    /**
                     * 时长（单位：秒）。
                     * @example `403.039989`
                     */
                    Duration: string;
                    /**
                     * 码率。
                     * @example `888.563`
                     */
                    Bit_rate: string;
                    /**
                     * 总帧数。
                     * @example `10040`
                     */
                    NumFrames: string;
                    /**
                     * 语言。
                     * @example `cn`
                     */
                    Lang: string;
                    /**
                     * 视频画面旋转角度。
                     * 取值 0, 90, 180, 270。
                     * 默认值 0
                     * @example `0`
                     */
                    Rotate: string;
                }[];
            };
            /**
             * 任务提交结果。
             * @example `{}`
             */
            SubmitResultJson: any;
            /**
             * 任务提交时间。
             * @example `2022-01-12T08:49:41Z`
             */
            SubmitTime: string;
            /**
             * 任务结束时间。
             * @example `2022-01-12T08:49:41Z`
             */
            FinishTime: string;
            /**
             * 提交任务时请求 ID。
             * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
             */
            RequestId: string;
        }[];
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
         * @example `8b2198504dd340b7b3c9842a74fc9baa`
         */
        ParentJobId: string;
        /**
         * 子任务数量。
         * @example `1`
         */
        JobCount: number;
        /**
         * 任务状态。 Success: 所有子任务完成后，有一个子任务则为成功, Fail: 所有子任务失败。
         * @example `Success`
         */
        Status: string;
        /**
         * 任务来源。 API: API, WorkFlow: 工作流, Console: 控制台
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
             *
             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
             * - type 为 Media 时，为媒资 ID。
             * @example `oss://bucket/path/to/video.mp4`
             */
            Media: string;
        }[];
        /**
         * 任务输出组。
         */
        OutputGroup: {
            /**
             * 输出媒体配置。
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
                 *
                 * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                 * - type 为 Media 时，为媒资 ID。
                 * @example `oss://bucket/path/to/video.mp4`
                 */
                Media: string;
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
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * video 设置
                         */
                        Video: {
                            /**
                             * 编码格式。
                             * @example `H.264`
                             */
                            Codec: string;
                            /**
                             * 编码级别。
                             *          支持baseline、main、high。
                             *
                             * - baseline：针对移动设备。
                             * - main：针对标准分辨率设备。
                             * - high：针对高分辨率设备。
                             * 默认值：high。
                             * @example `Main`
                             */
                            Profile: string;
                            /**
                             * 视频平均码率。
                             *
                             * - 取值范围：[10，50000]。
                             * - 单位：Kbps。
                             * @example `3000`
                             */
                            Bitrate: string;
                            /**
                             * 码率-质量控制因子。
                             *
                             * - 取值范围：[0，51]。
                             * - 默认值：编码格式为H264，默认值为23。编码格式为H265，默认值为26。
                             * 如果设置了Crf，则Bitrate的设置失效。
                             * @example `23`
                             */
                            Crf: string;
                            /**
                             * 宽。
                             *
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始宽度。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 高。
                             *
                             * - 取值范围：[128,4096]。
                             * - 单位：px。
                             * - 默认值：视频原始高度。
                             * @example `1080`
                             */
                            Height: string;
                            /**
                             * 帧率。
                             *
                             * - 取值范围：(0,60]。
                             * - 当输入文件帧率超过60时取60。
                             * - 默认值：取输入文件帧率。
                             * @example `25`
                             */
                            Fps: string;
                            /**
                             * 关键帧间最大帧数。
                             *
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
                             * 示例：1280:800:0:140
                             * @example `1280:800:0:140`
                             */
                            Crop: string;
                            /**
                             * 视频贴黑边。
                             *
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
                             *
                             * - 值范围：[1000，128000]
                             * - 默认值：6000
                             * - 单位：Kb
                             * @example `6000`
                             */
                            Bufsize: string;
                            /**
                             * 视频码率峰值。
                             *
                             * - 值范围：[10，50000]
                             * - 单位：Kbps
                             * @example `9000`
                             */
                            Maxrate: string;
                            /**
                             * abr 最大码率（只有窄高1有效）
                             * - 值范围：[10，50000]
                             * - 单位：Kbps
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
                             *
                             * - 默认值：44100   支持22050、32000、44100、48000、96000，
                             * - 单位：Hz
                             * @example `44100`
                             */
                            Samplerate: string;
                            /**
                             * 输出文件的音频码率。
                             *
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
                        /**
                         * 条件转码参数。
                         */
                        TransConfig: {
                            /**
                             * 视频转码模式。取值如下：
                             * - onepass：一般用于ABR。编码速度较twopass更快。
                             * - twopass：一般用于VBR。编码速度较onepass更慢。
                             * - CBR：固定码率模式。
                             * 默认值：onepass。
                             * @example `onepass`
                             */
                            TransMode: string;
                            /**
                             * 是否检查视频分辨率。IsCheckReso和IsCheckResoFail只支持二选一，IsCheckResoFail优先级更高。
                             * - true：检查。当输入视频分辨率（宽或高）小于输出设置时，按输入视频分辨率转码。
                             * - false：不检查。
                             * 默认值：false。
                             * @example `true`
                             */
                            IsCheckReso: string;
                            /**
                             * 是否检查视频分辨率。IsCheckReso和IsCheckResoFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入视频分辨率（宽或高）小于输出设置时，返回转码失败。
                             * - false：不检查。
                             * 默认值：false。
                             * @example `true`
                             */
                            IsCheckResoFail: string;
                            /**
                             * 是否检查视频码率。IsCheckVideoBitrate和IsCheckVideoBitrateFail只支持二选一，IsCheckVideoBitrateFail优先级更高。
                             * - true：检查。当输入视频码率小于输出设置时，按输入视频码率转码。
                             * - false：不检查。
                             * 默认值：false。
                             * @example `true`
                             */
                            IsCheckVideoBitrate: string;
                            /**
                             * 是否检查视频码率。IsCheckVideoBitrate和IsCheckVideoBitrateFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入视频码率小于输出设置时，返回转码失败。
                             * - false：不检查。
                             * 默认值：false。
                             * @example `true`
                             */
                            IsCheckVideoBitrateFail: string;
                            /**
                             * 是否检查音频码率。IsCheckAudioBitrate和IsCheckAudioBitrateFail只支持二选一，IsCheckAudioBitrateFail优先级更高。
                             * - true：检查。当输入音频码率小于输出设置时，按输入音频码率转码。
                             * - false：不检查。
                             * 默认值：
                             * - 参数为空，并且codec和输入源不一样：false。
                             * - 参数为空，并且codec和输入源一样：true。
                             * @example `true`
                             */
                            IsCheckAudioBitrate: string;
                            /**
                             * 是否检查音频码率。IsCheckAudioBitrate和IsCheckAudioBitrateFail只支持二选一，本参数优先级更高。
                             * - true：检查。当输入音频码率小于输出设置时，返回转码失败。
                             * - false：不检查。
                             * 默认值：false。
                             * @example `true`
                             */
                            IsCheckAudioBitrateFail: string;
                            /**
                             * 分辨率改写方式。当Width或Height都填写时才生效，可以和LongShortMode搭配使用。
                             * 可选值：rescale、crop、pad、none。
                             * 默认值：none。
                             * @example `none`
                             */
                            AdjDarMethod: string;
                        };
                    };
                };
                /**
                 * 图片水印配置。
                 */
                ImageWatermarks: {
                    /**
                     * 模板 ID。
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
                     */
                    TemplateId: string;
                    /**
                     * 覆盖参数, 若填写会覆盖模板对应参数。
                     */
                    OverwriteParams: {
                        /**
                         * 输出视频上水印图片宽。
                         * 值有两种形式：
                         * - 整数型代水印图片宽的像素值。
                         *   - 范围：[8,4096]
                         *   - 单位：px
                         * - 小数型代表相对输出视频分辨率宽的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃。
                         * @example `32`
                         */
                        Width: string;
                        /**
                         * 输出视频上水印图片高。
                         * 值有两种形式：
                         * - 整数型代水印图片高的像素值。
                         *   - 范围：[8,4096]
                         *   - 单位：px
                         * - 小数型代表相对输出视频分辨率高的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃。
                         * @example `32`
                         */
                        Height: string;
                        /**
                         * 水印图片相对输出视频的水平偏移量。
                         * 默认值：0
                         * 值有两种形式：
                         * - 整数型代表偏移像素。
                         *   - 范围：[8，4096]
                         *   - 单位：px
                         * - 小数型代表水平偏移量与输出分辨率宽的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃
                         * @example `10`
                         */
                        Dx: string;
                        /**
                         * 水印图片相对输出视频的垂直偏移量。
                         * 默认值：0
                         * 值有两种形式：
                         * - 整数型代表偏移像素。
                         *   - 范围[8，4096]
                         *   - 单位：px
                         * - 小数型代表垂直偏移量与输出分辨率高的比率。
                         *   - 范围：(0，1)
                         *   - 支持4位小数，如0.9999，超出部分系统自动丢弃
                         * @example `10`
                         */
                        Dy: string;
                        /**
                         * 水印的位置。
                         * - 可取值：TopRight（右上）、TopLeft（左上）、BottomRight（右下）、BottomLeft（左下）
                         * - 默认值：TopRight
                         * @example `TopLeft`
                         */
                        ReferPos: string;
                        /**
                         * 动态水印，显示时间设置。
                         */
                        Timeline: {
                            /**
                             * 水印开始出现时间。
                             * - 单位：秒
                             * - 取值范围：数字
                             * - 默认值：0
                             * @example `00:00:05`
                             */
                            Start: string;
                            /**
                             * 水印持续时间。
                             * - 取值范围：[数字，ToEND]
                             * - 默认值：ToEND
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
                             *
                             * - type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                             * - type 为 Media 时，为媒资 ID。
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
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
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
                         * 字体。默认：SimSun。
                         * @example `SimSun`
                         */
                        FontName: string;
                        /**
                         * 颜色。
                         * @example `#006400`
                         */
                        FontColor: string;
                        /**
                         * 字体透明度。
                         * - 范围：(0, 1]
                         * - 默认：1.0
                         * @example `1.0`
                         */
                        FontAlpha: string;
                        /**
                         * 文本上边距。
                         * - 默认：0
                         * - 范围：[0,4096]
                         * @example `10`
                         */
                        Top: string;
                        /**
                         * 文本左边距。
                         * - 默认：0
                         * - 范围：[0,4096]
                         * @example `10`
                         */
                        Left: string;
                        /**
                         * 字体大小。
                         * - 默认值：16
                         * - 范围：(4, 120)
                         * @example `16`
                         */
                        FontSize: number;
                        /**
                         * 描边宽度。
                         * - 默认：0
                         * - 范围：(0,4096]
                         * @example `0`
                         */
                        BorderWidth: number;
                        /**
                         * 描边颜色。
                         * 默认：Black
                         * 更多取值请参见BorderColor。
                         * @example `#006400`
                         */
                        BorderColor: string;
                        /**
                         * 根据输出视频大小调整字体 size。
                         * - true: false
                         * - default: false
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
                     * @example `9547c6ad97cb4f2aaa29683ebd18d410`
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
                             *       type 为 OSS 时，为 URL, 支持 OSS 协议和 HTTP 协议；
                             *       type 为 Media 时，为媒资 ID。
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
                    /**
                     * 密钥服务类型。目前仅支持KMS和Base64
                     * @example `KMS`
                     */
                    KeyServiceType: string;
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
             * @example `e37ebee5d98b4781897f6086e89f9c56`
             */
            PipelineId: string;
            /**
             * 任务优先级。数字越大优先级越高，取值范围：1~10
             * @example `5`
             */
            Priority: number;
        };
    };
}
