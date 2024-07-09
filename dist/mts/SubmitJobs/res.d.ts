export interface SubmitJobsResponse {
    JobResultList: {
        /**
         * 提交转码作业结果列表。
         */
        JobResult: {
            /**
             * 作业详细信息。如果提交失败则不会生成作业ID。
             */
            Job: {
                /**
                 * 作业添加时间。
                 * @example `2014-01-10T12:00:00Z`
                 */
                CreationTime: string;
                /**
                 * 转码进度。
                 * @example `100`
                 */
                Percent: number;
                /**
                 * 作业完成时间。
                 * @example `2014-01-10T12:20:00Z`
                 */
                FinishTime: string;
                /**
                 * 作业状态。
                 * - **Submitted**：作业已提交。
                 * - **TranscodeFail**：转码失败。
                 * @example `Submitted`
                 */
                State: string;
                /**
                 * 任务ID。
                 * @example `31fa3c9ca8134f9cec2b4b0b0f78****`
                 */
                JobId: string;
                /**
                 * 转码失败时的错误码。转码成功时不返回。
                 * @example `InternalError`
                 */
                Code: string;
                /**
                 * 转码失败时的消息。转码成功时不返回。
                 * @example `The operation has failed due to some unknown error, exception or failure.`
                 */
                Message: string;
                /**
                 * 作业输出。
                 */
                Output: {
                    /**
                     * 视频配置。
                     * > 指定则替换**TemplateId**所指定模板的**AliyunVideoCodec**设置。
                     */
                    Video: {
                        /**
                         * 缓冲区大小。
                         * - 单位：Kb。
                         * - 默认值：**6000**。
                         * @example `1000`
                         */
                        Bufsize: string;
                        /**
                         * 独立去噪算法强度。
                         * @example `5`
                         */
                        Degrain: string;
                        /**
                         * 视频平均码率范围。
                         */
                        BitrateBnd: {
                            /**
                             * 总码率上限。单位：Kbps。
                             * @example `20`
                             */
                            Max: string;
                            /**
                             * 总码率下限。单位：Kbps。
                             * @example `10`
                             */
                            Min: string;
                        };
                        /**
                         * 视频颜色格式。
                         * - 默认值：**yuv420p**或原始颜色格式。
                         * - 可取值：**yuv420p**，**yuvj420p**等标准颜色格式。
                         *     > 非标准颜色格式（比如：yuvj420p(pc, bt470bg/bt470bg/smpte170m）需要配置兼容，否则会导致转码失败。
                         * @example `yuvj420p`
                         */
                        PixFmt: string;
                        /**
                         * 视频贴黑边。
                         * - 参数格式：width:height:left:top。
                         * - 单位：px。
                         * @example `1280:800:0:140`
                         */
                        Pad: string;
                        /**
                         * 编解码格式。
                         * - 支持**H.264**、**H.265**、**GIF**、**WEBP**。
                         * - 默认值：**H.264**。
                         * @example `H.264`
                         */
                        Codec: string;
                        /**
                         * 高。
                         * - 单位：px。
                         * - 默认值：视频原始高度。
                         * @example `1280`
                         */
                        Height: string;
                        /**
                         * 视频质量控制值。
                         * @example `15`
                         */
                        Qscale: string;
                        /**
                         * 视频画面裁切。支持2种方式：
                         * - 自动检测黑边并裁切：设置为**border**。
                         * - 自定义裁切：参数格式为width:height:left:top。
                         * @example `1280:800:0:140`
                         */
                        Crop: string;
                        /**
                         * 视频输出文件的码率。单位：Kbps。
                         * @example `10`
                         */
                        Bitrate: string;
                        /**
                         * 视频码率峰值。单位：Kbps。
                         * @example `10`
                         */
                        Maxrate: string;
                        /**
                         * 最大帧率。
                         * @example `15`
                         */
                        MaxFps: string;
                        /**
                         * 编码级别，目前仅H264支持此参数。默认值：**high**，可取值：
                         * > 如果您有多个清晰度，建议最低清晰度配置成baseline，以保证最低端设备可播放。其他清晰度配置为main或high。
                         * - **baseline**：针对移动设备。
                         * - **main**：针对标准分辨率设备。
                         * - **high**：针对高分辨率设备。
                         * @example `baseline`
                         */
                        Profile: string;
                        /**
                         * 码率-质量控制因子。
                         * - 如果设置了**Crf**，则**Bitrate**的设置失效。
                         * - 默认值：编码格式为H264，默认值为**23**。编码格式为H265，默认值为**26**。
                         * @example `22`
                         */
                        Crf: string;
                        /**
                         * 关键帧间最大时间间隔或最大帧数。单位：秒（s）。
                         * - 默认值：10s。
                         * - 最大帧数时无单位。
                         * @example `1`
                         */
                        Gop: string;
                        /**
                         * 宽。
                         * - 单位：px。
                         * - 默认值：**视频原始宽度**。
                         * @example `1080`
                         */
                        Width: string;
                        /**
                         * 帧率。
                         * - 单位：fps。
                         * - 可取值范围：0~60，当输入文件帧率超过60时取60。
                         * - 默认值：取输入文件帧率。
                         * @example `60`
                         */
                        Fps: string;
                        /**
                         * 视频算法器预置。默认值：**medium**。可取值：
                         * - **veryfast**：超快。
                         * - **fast**：快。
                         * - **medium**：中等。
                         * - **slow**：慢。
                         * - **slower**：超慢。
                         * @example `veryfast`
                         */
                        Preset: string;
                        /**
                         * 扫描模式。取值如下：
                         * - **不设置**：按输入文件的原始模式。
                         * - **auto**：自动去隔行。
                         * - **progressive**：顺序扫描（逐行扫描）。
                         * - **interlaced**：交叉扫描（隔行扫描）。
                         * - **默认值**：空，即不设置。
                         * **最佳实践**：交叉扫描虽然比顺序扫描更节省数据量，但画质不佳，所以现在主流视频制作都采用顺序扫描。
                         * - 如果您设置了**顺序扫描**或**交叉扫描**，但与原视频模式不符，会导致转码失败。
                         * - 建议您设置**原视频模式**或**自动去隔行**，以提高兼容性。
                         * @example `interlaced`
                         */
                        ScanMode: string;
                        /**
                         * 资源优先级。
                         * @example `1`
                         */
                        ResoPriority: string;
                    };
                    /**
                     * 转码通用配置。
                     * > 如果请求参数中设置了该值，则覆盖指定转码模板中的对应参数。
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
                         * 转码模式。可取值：
                         * - **onepass**： 基于One-Pass算法，准确性较好。
                         * - **twopass**：基于Two-Pass算法，准确性较差。
                         * - **CBR**：Constant bit rate，固定码率。
                         * @example `onepass`
                         */
                        TransMode: string;
                        /**
                         * 是否检查分辨率。如果输出分辨率大于输入分辨率（判断条件是宽或高），则视为输出分辨率等于输入分辨率。
                         * - **true**表示检查。
                         * - **false**表示不检查。
                         * - 默认值：**false**。
                         * @example `false`
                         */
                        IsCheckReso: string;
                        /**
                         * 是否检查码率。当输出视频码率大于媒体源视频码率时，则不进行转码，直接返回转码失败。此值优先级大于**IsCheckVideoBitrate**。
                         * - **true**表示检查。
                         * - **false**表示不检查。
                         * - 默认值：**false**。
                         * @example `true`
                         */
                        IsCheckVideoBitrateFail: string;
                        /**
                         * 分辨率改写方式。默认值：**none**。可取值：
                         * - rescale：重新做scale。
                         * - crop：裁剪。
                         * - pad：填充。
                         * - none：不改写。
                         * @example `crop`
                         */
                        AdjDarMethod: string;
                        /**
                         * 是否检查视频码率。如果视频输出码率大于视频输入码率，则视为视频输出码率等于视频输入码率。
                         * - **true**表示检查。
                         * - **false**表示不检查。
                         * - 默认值：**false**。
                         * @example `false`
                         */
                        IsCheckVideoBitrate: string;
                        /**
                         * 是否检查分辨率。此值优先级大于IsCheckReso。如果输出分辨率大于输入分辨率（判断条件是宽或高），不进行转码，直接返回转码失败。
                         * - **true**：检查。
                         * - **false**：不检查。
                         * - 默认值：**false**。
                         * @example `false`
                         */
                        IsCheckResoFail: string;
                        /**
                         * 是否检查音频码率。此值优先级大于**IsCheckAudioBitrate**。当输出音频码率大于媒体源音频码率时，不进行转码，直接返回转码失败。
                         * - **false**：检查。
                         * - **true**：不检查。
                         * @example `true`
                         */
                        IsCheckAudioBitrateFail: string;
                    };
                    /**
                     * 数据加密，只支持m3u8格式的输出。
                     */
                    Encryption: {
                        /**
                         * 加密类型。取值：**hls-aes-128**。
                         * @example `hls-aes-128`
                         */
                        Type: string;
                        /**
                         * 加密视频的密钥。
                         * @example `encryptionkey128`
                         */
                        Key: string;
                        /**
                         * 密钥Key不能明文传输给MPS，需要加密，方式为Base64或KMS。如密钥为"encryptionkey128”, 则Base64(“encryptionkey128”)， 或 KMS(Base64(“encryptionkey128”)。
                         * @example `Base64`
                         */
                        KeyType: string;
                        /**
                         * 加密ID。
                         * @example `31fa3c9ca8134f9cec2b4b0b0f78****`
                         */
                        Id: string;
                        /**
                         * 密钥的访问URL，使用BASE64进行编码。
                         * @example `https://1161758785*****.cn-shanghai.fc.aliyuncs.com/2016-08-15/proxy/HLS-decyptServer/decyptServer/`
                         */
                        KeyUri: string;
                        /**
                         * 前面不加密的片数（视频能快速播放起来）。
                         * @example `3`
                         */
                        SkipCnt: string;
                    };
                    WaterMarkList: {
                        /**
                         * 水印列表。
                         * > 如果水印输出截断或失败，请先检查您添加的文本水印中是否包含特殊字符，如有，则需要对特殊字符进行转义后再传入，或<props="china">[提交工单](https://smartservice.console.aliyun.com/service/create-ticket?product=mts)</props><props="intl">[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.12246746.top-nav.dticket.68797bbcm8H408#/ticket/add/?productId=1232)</props>联系阿里云客服进行兼容处理。
                         */
                        WaterMark: {
                            /**
                             * 水印类型。如果请求参数中设置了此参数，则此值覆盖水印模板对应参数。更多信息，请参见[参数详情](~~29253~~)。可取值：
                             * - **Image**：图片水印。
                             * - **Text**：文字水印。
                             * @example `Image`
                             */
                            Type: string;
                            /**
                             * 水印的位置。如果请求参数中设置了此值，则覆盖水印模板对应参数。可取值：
                             * - **TopRight**：右上。
                             * - **TopLeft**：左上。
                             * - **BottomRight**：右下。
                             * - **BottomLeft**：左下。
                             * @example `TopRight`
                             */
                            ReferPos: string;
                            /**
                             * 水印图片相对输出视频的水平偏移量。如果请求参数中设置了此值，则覆盖水印模板对应参数。默认值为0。值有两种形式：
                             * - 整数型：代表偏移像素值。
                             *     - 范围：**\[8,4096\]**。
                             *     - 单位：px。
                             * - 小数型：代表水平偏移量与输出分辨率宽的比率。
                             *     - 范围：（0,1)。
                             *     - 支持四位小数，例如：0.9999，超出部分系统自动丢弃。
                             * @example `1`
                             */
                            Dx: string;
                            /**
                             * 水印图片宽。如果在请求参数中设置了此值，则覆盖水印模板对应水印图片宽。值有两种形式：
                             * - 整数型：代表水印图片宽的像素值。
                             *     - 范围：**\[8，4096\]**。
                             *     - 单位：px。
                             * - 小数型：代表相对输出视频分辨率宽的比率。
                             *     - 范围：**(0,1)**。
                             *     - 支持4位小数，例如：0.9999，超出部分系统自动丢弃。
                             * @example `1080`
                             */
                            Width: string;
                            /**
                             * 水印图片高。如果在请求参数中设置了此值，则覆盖水印模板对应水印图片高。值有两种形式：
                             * - 整数型：代表水印图片高的像素值。
                             *     - 范围：**\[8，4096\]**。
                             *     - 单位：px。
                             * - 小数型：代表相对输出视频分辨率高的比率。
                             *     - 范围：**(0,1)**。
                             *     - 支持4位小数，例如：0.9999，超出部分系统自动丢弃。
                             * @example `1280`
                             */
                            Height: string;
                            /**
                             * 水印输入文件。目前支持png图片、mov文件作为输入文件。
                             */
                            InputFile: {
                                /**
                                 * 输入文件的OSS Object。
                                 * @example `example-logo-****.png`
                                 */
                                Object: string;
                                /**
                                 * 输入文件的OSS Location。
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
                             * 水印模板ID。
                             * @example `88c6ca184c0e47098a5b665e2a12****`
                             */
                            WaterMarkTemplateId: string;
                            /**
                             * 水印图片相对输出视频的垂直偏移量。如果在请求参数中设置了此值，则覆盖水印模板对应水印图片相对输出视频的垂直偏移量。值有两种形式：
                             * - 整数型：代表水印图片相对输出视频的垂直偏移量像素。
                             *     - 范围：**\[8，4096\]**。
                             *     - 单位：px。
                             * - 小数型：代表水印图片相对输出视频的垂直偏移量比率。
                             *     - 范围：**(0,1)**。
                             *     - 支持4位小数，例如：0.9999，超出部分系统自动丢弃。
                             * @example `1`
                             */
                            Dy: string;
                        }[];
                    };
                    /**
                     * 水印配置文件URL。
                     * @example `http://example.com/configure`
                     */
                    WaterMarkConfigUrl: string;
                    /**
                     * 模糊处理，JSON对象。更多信息请参见[参数详情](~~29253~~)中的**模糊处理详情**。
                     * @example `{"0": [{"l": 10,"t": 10,"w": 10,"h": 10},{"l": 100,"t": 0.1,"w": 10,"h": 10}],"128000": [],"250000": [{"l": 0.2,"t": 0.1,"w": 0.01,"h": 0.05}]}`
                     */
                    DeWatermark: string;
                    /**
                     * M3U8非标准支持，JSON对象。更多信息请参见[参数详情](~~29253~~)中的**M3U8非标准参数支持详情**。
                     */
                    M3U8NonStandardSupport: {
                        /**
                         * JSON对象，TS文件相关非标准支持。更多信息请参见[参数详情](~~29253~~)中的**TS参数支持详情**。
                         */
                        TS: {
                            /**
                             * 是否支持在M3U8文件中输出TS文件的大小。可取值：
                             * - **true**：支持。
                             * - **false**：不支持。
                             * @example `true`
                             */
                            SizeSupport: boolean;
                            /**
                             * 是否支持在M3U8文件中输出TS的md5值。可取值：
                             * - **true**：支持。
                             * - **false**：不支持。
                             * @example `true`
                             */
                            Md5Support: boolean;
                        };
                    };
                    /**
                     * 任务在其对应管道内的优先级。
                     * - 最高优先级：**10**。
                     * - 默认值：**6**。
                     * @example `5`
                     */
                    Priority: string;
                    /**
                     * 音频配置。
                     * > 如果请求参数中指定了音频配置则覆盖指定转码模板中的对应参数。
                     */
                    Audio: {
                        /**
                         * 音频编码预置。
                         * > 当**Codec**为**aac**时可以取如下范围中的值：**aac_low**、**aac_he**、**aac_he_v2**、**aac_ld**、**aac_eld**。
                         * @example `aac_low`
                         */
                        Profile: string;
                        /**
                         * 音频编解码格式。
                         * - 支持**aac**、**mp3**、**vorbis**、**flac**。
                         * - 默认值：**aac**。
                         * @example `aac`
                         */
                        Codec: string;
                        /**
                         * 采样率。
                         * - 支持**22050**、**32000**、**44100**、**48000**、**96000**。
                         * - 单位：Hz。
                         * - 默认值：**44100**。
                         * > 若视频容器格式为flv，音频编解码格式选择为mp3时，采样率不支持32000、48000、96000；音频编解码格式为mp3时，采样率不支持96000。
                         * @example `32000`
                         */
                        Samplerate: string;
                        /**
                         * 音频质量控制度。
                         * @example `15`
                         */
                        Qscale: string;
                        /**
                         * 声道数。
                         * - 当Codec设置为mp3时，声道数只支持**1**、**2**。
                         * - 当Codec设置为aac时，声道数只支持**1**、**2**、**4**、**5**、**6**、**8**。
                         * - 默认值：**2**。
                         * @example `6`
                         */
                        Channels: string;
                        /**
                         * 音量控置。
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
                             * 音量调整幅度
                             * - 单位：db。
                             * - 默认：**-20db**。
                             * @example `-20`
                             */
                            Level: string;
                        };
                        /**
                         * 输出文件的音频码率。
                         * - 单位：Kbps。
                         * - 默认值：**128**。
                         * @example `128`
                         */
                        Bitrate: string;
                    };
                    /**
                     * 音频流序号。
                     * - 格式：格式：0:a:{序号}，示例：0:a:0。
                     * - 序号的含义是音频流列表的下标，序号从0开始。
                     * - 若未设置，选择默认的音频流。
                     * @example `0:a:0`
                     */
                    AudioStreamMap: string;
                    MergeList: {
                        /**
                         * 视频拼接配置。
                         */
                        Merge: {
                            /**
                             * 起始时间点。
                             * - 格式：`hh:mm:ss[.SSS]`或者`sssss[.SSS]`。
                             * - 示例：01:59:59.999或者32000.23。
                             * @example `00000.50`
                             */
                            Start: string;
                            /**
                             * 代理授权使用的角色信息。
                             * @example `acs:ram::<your uid>:role/<your role name>`
                             */
                            RoleArn: string;
                            /**
                             * 拼接片段地址。
                             * - 示例：`http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv`
                             * - Object需要经过URLEncode，采用UTF-8编码。
                             * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/example-object-****.flv`
                             */
                            MergeURL: string;
                            /**
                             * 持续时间。
                             * - 格式：`hh:mm:ss[.SSS]`或者`sssss[.SSS]`。
                             * - 示例：01:59:59.999或者32000.23。
                             * @example `00000.20`
                             */
                            Duration: string;
                        }[];
                    };
                    /**
                     * 分辨率随源。
                     */
                    SuperReso: {
                        /**
                         * 是否获取采样率相关参数。可取值：
                         * - **true**：是。
                         * - **false**：否。
                         * @example `true`
                         */
                        IsHalfSample: string;
                    };
                    /**
                     * 用户自定义数据。
                     * @example `example data`
                     */
                    UserData: string;
                    OutSubtitleList: {
                        /**
                         * 输出字幕列表。
                         */
                        OutSubtitle: {
                            /**
                             * 视频轨。格式：`0:{流}:{流序号} `，即`0:v:{video_index}`。流取值为v: video音频流，序号的含义是音频流列表的下标，序号从0开始。
                             * @example `0:v:0`
                             */
                            Map: string;
                            /**
                             * 输出文件详细信息。
                             */
                            OutSubtitleFile: {
                                /**
                                 * 代理授权使用的角色信息。
                                 * @example `acs:ram::<your uid>:role/<your role name>`
                                 */
                                RoleArn: string;
                                /**
                                 * 输出文件的OSS Object。
                                 * @example `example-output.flv`
                                 */
                                Object: string;
                                /**
                                 * 输出文件的OSS Location。
                                 * @example `oss-cn-hangzhou`
                                 */
                                Location: string;
                                /**
                                 * 输入文件的OSS Bucket。
                                 * @example `example-bucket-****`
                                 */
                                Bucket: string;
                            };
                            /**
                             * 是否成功。可取值：
                             * - **true**：成功。
                             * - **false**：失败。
                             * @example `true`
                             */
                            Success: boolean;
                            /**
                             * 创建作业失败时错误消息。创建成功时此参数不返回。
                             * @example `The specified parameter “%s” cannot be null.`
                             */
                            Message: string;
                        }[];
                    };
                    /**
                     * 数字水印。
                     */
                    DigiWaterMark: {
                        /**
                         * 水印类型。如果设置过水印类型，则此值覆盖水印模板对应参数。可取值：
                         * - **Image**：默认值，图片水印。
                         * - **Text**：文字水印。
                         * @example `Image`
                         */
                        Type: string;
                        /**
                         * 文字或图片的透明度。
                         * - 取值范围：**(0,1]**。
                         * - 默认值：**1.0**。
                         * @example `1.0`
                         */
                        Alpha: string;
                        /**
                         * 输入文件。
                         */
                        InputFile: {
                            /**
                             * 输入文件的OSS Object。
                             * @example `example-intput.flv`
                             */
                            Object: string;
                            /**
                             * 输入文件的OSS Location。
                             * @example `oss-cn-hangzhou`
                             */
                            Location: string;
                            /**
                             * 输入文件的OSS Bucket。
                             * @example `example-bucket-****`
                             */
                            Bucket: string;
                        };
                    };
                    /**
                     * 视频流序号。
                     * - 格式：格式：0:a:{序号}，示例：0:a:0。
                     * - 序号的含义是音频流列表的下标，序号从0开始。
                     * - 若未设置，选择默认的视频流。
                     * @example `0:a:0`
                     */
                    VideoStreamMap: string;
                    /**
                     * 输出文件。
                     */
                    OutputFile: {
                        /**
                         * 代理授权使用的角色信息。
                         * @example `acs:ram::<your uid>:role/<your role name>`
                         */
                        RoleArn: string;
                        /**
                         * 输出文件的OSS Object。
                         * @example `example-output.flv`
                         */
                        Object: string;
                        /**
                         * 输出文件的OSS Location。
                         * @example `oss-cn-hangzhou`
                         */
                        Location: string;
                        /**
                         * 输入文件的OSS Bucket。
                         * @example `example-bucket-****`
                         */
                        Bucket: string;
                    };
                    AmixList: {
                        /**
                         * 混音列表。
                         */
                        Amix: {
                            /**
                             * 在AmixURL中选取目标音轨，取值为：0:a:{audio_index}, 如0:a:0。
                             * @example `0:a:0`
                             */
                            Map: string;
                            /**
                             * 起始时间。数字或时间格式例如："1:25:36.240"， "32000.23"。
                             * @example `0`
                             */
                            Start: string;
                            /**
                             * 需要被混音的背景音轨媒体。
                             * - 可取值：OSS地址或字符串`"input"`。
                             * - input场景：同一视频两路音轨合并。
                             * @example `https://outpu***.oss-cn-shanghai.aliyuncs.com/mp4-to-mp3%5E1571025263578816%40.mp3`
                             */
                            AmixURL: string;
                            /**
                             * 持续时长。数字或时间格式。
                             * @example `20`
                             */
                            Duration: string;
                            /**
                             * 媒体时长取值。可取值：**first**、**long**。
                             * - **first**：输出媒体的时长以输入媒体的时长为准。
                             * - **long**：输出媒体的时长以两个媒体中时长最长的为准。
                             * - 默认值：**long**。
                             * @example `long`
                             */
                            MixDurMode: string;
                        }[];
                    };
                    /**
                     * 视频顺时针旋转角度。
                     * @example `180`
                     */
                    Rotate: string;
                    /**
                     * 容器。
                     */
                    Container: {
                        /**
                         * 容器格式。
                         * - 默认值：**mp4**。
                         * - 视频转码可取值flv、mp4、HLS（m3u8+ts）、MPEG-DASH（MPD+fMP4）。
                         * - 音频转码可取值mp3、mp4、ogg、flac、m4a。
                         * - 图片可取值gif、WEBP。
                         * - 容器格式为gif时，VideoCodec设置只能设置为GIF。
                         * - 容器格式为webp时，VideoCodec设置只能设置为WEBP。
                         * - 容器格式为flv时，VideoCodec不能设置为H265。
                         * @example `flv`
                         */
                        Format: string;
                    };
                    /**
                     * 剪辑片段。
                     */
                    Clip: {
                        /**
                         * 剪辑时间段。
                         */
                        TimeSpan: {
                            /**
                             * 开始时间。
                             * - 格式：`hh:mm:ss[.SSS]`或`sssss[.SSS]`。
                             * - 取值范围：`[00:00:00.000,23:59:59.999]`或`[0.000，86399.999]`。
                             * @example `01:59:59.999`
                             */
                            Seek: string;
                            /**
                             * 延续时间。
                             * - 格式：`hh:mm:ss[.SSS]`或`sssss[.SSS]`。
                             * - 取值范围：`[00:00:00.000,23:59:59.999]`或`[0.000，86399.999]`。
                             * @example `01:00:59.999`
                             */
                            Duration: string;
                        };
                    };
                    /**
                     * **MergeList**与**MergeConfigUrl**两个参数只支持二选一。
                     * - MergeConfigUrl指定的配置文件允许50个拼接片段上限。
                     * - MergeConfigUrl是拼接配置文件URL地址。
                     * - 只支持存放在OSS上的配置文件，且需要保证有授权给MPS可访问权限，文件内部内容参见拼接参数详情。
                     * - mergeConfigfile文件内部内容示例：`{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}` 。
                     * @example ``{"MergeList":[{"MergeURL":"http://exampleBucket****.oss-cn-hangzhou.aliyuncs.com/video_01.mp4"}]}`
                     */
                    MergeConfigUrl: string;
                    OpeningList: {
                        /**
                         * 开板列表，JSON对象。
                         */
                        Opening: {
                            /**
                             * 开板视频的OSS URL地址。
                             * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv`
                             */
                            openUrl: string;
                            /**
                             * 相对正片视频的开始时间。从0开始延迟多长时间后，显示开板视频。
                             * - 单位：秒。
                             * - 默认值：**0**。
                             * @example `1`
                             */
                            Start: string;
                            /**
                             * 宽。
                             * - 可取值：**0~4096**、**-1**、**full**。
                             * - 默认值：**-1**。
                             * - **-1**代表片源的值。
                             * - **full**表示填满画面。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 高。
                             * - 可取值：**0~4096**、**-1**、**full**。
                             * - 默认值：**-1**。
                             * - **-1**代表片源的值，
                             * - **full**表示填满画面。
                             * @example `1080`
                             */
                            Height: string;
                        }[];
                    };
                    /**
                     * 转码封包配置。如果请求参数中设置了此参数，则覆盖指定转码模板中的对应参数。
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
                             * 终帧暂停时间，单位：厘秒。
                             * @example `0`
                             */
                            FinalDelay: string;
                            /**
                             * 调色板颜色抖动方式。可取值：**sierra**、**bayer**。
                             * @example `bayer`
                             */
                            DitherMode: string;
                            /**
                             * 循环次数。
                             * @example `0`
                             */
                            Loop: string;
                            /**
                             * 自定义调色板功能。可取值：
                             * - **true**：自定义
                             * - **false**：非自定义。
                             * @example `false`
                             */
                            IsCustomPalette: string;
                        };
                        /**
                         * 切片配置，JSON对象。
                         */
                        Segment: {
                            /**
                             * 分片时长。整数，单位：秒。
                             * - 可取值范围：**\[1,10\]**。
                             * - 默认值：**10**秒。
                             * @example `20`
                             */
                            Duration: string;
                        };
                    };
                    TailSlateList: {
                        /**
                         * 尾板列表，JSON对象。
                         */
                        TailSlate: {
                            /**
                             * 开始时间。
                             * @example `1`
                             */
                            Start: string;
                            /**
                             * 如果尾板视频的宽、高小于正片时，设置空白处填充的背景色。默认为**White**，更多取值请参见[bgcolor](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/29253/cn_zh/1502784952344/color.txt?spm=a2c4g.11186623.2.63.241240f77qp3Yy&file=color.txt)。
                             * @example `White`
                             */
                            BgColor: string;
                            /**
                             * 是否要拼接尾板视频的音频内容。可取值：
                             * - **true**：拼接。
                             * - **false**：不拼接。
                             * @example `false`
                             */
                            IsMergeAudio: boolean;
                            /**
                             * 宽。
                             * - 可取值：**0\~4096**、**\-1**、**full**。
                             * - **\-1**代表片源的值，**full**表示填满画面。
                             * - 默认为**\-1**。
                             * @example `1920`
                             */
                            Width: string;
                            /**
                             * 高。
                             * - 可取值：**0\~4096**、**\-1**、**full**。
                             * - **-1**代表片源的值，**full**表示填满画面。
                             * - 默认为**\-1**。
                             * @example `1080`
                             */
                            Height: string;
                            /**
                             * 正片视频和尾板视频过渡的时长。过渡的效果是淡入淡出：正片显示最后一帧，同时播放尾板视频，正片最后一帧逐步变暗，尾板视频逐步变亮。单位秒，默认**0**。
                             * @example `2`
                             */
                            BlendDuration: string;
                            /**
                             * 尾板视频的OSS URL地址。
                             * @example `http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com/opening_01.flv`
                             */
                            TailUrl: string;
                        }[];
                    };
                    /**
                     * 转码模板ID。
                     * @example `S00000000-000010`
                     */
                    TemplateId: string;
                    /**
                     * 字幕配置信息。
                     */
                    SubtitleConfig: {
                        ExtSubtitleList: {
                            /**
                             * 外部字幕列表，JSON数组，最多**4**个。
                             */
                            ExtSubtitle: {
                                /**
                                 * 外部字幕字符编码。
                                 * - 范围：**UTF-8**、**GBK**、**BIG5**、**auto**。
                                 * - 默认：**auto**。
                                 * > 外部字幕字符编码设置为**auto**时，存在误检情况，建议您指定具体的字符编码。
                                 * @example `UTF-8`
                                 */
                                CharEnc: string;
                                /**
                                 * 外挂字幕转换成硬字幕对应的字体名称。默认值：**SimSun**。更多字体信息请参见[字体列表](~~59950~~)。
                                 * @example `"WenQuanYi Zen Hei", "Yuanti SC Regular", "SimSun"`
                                 */
                                FontName: string;
                                /**
                                 * JSON对象，外部输入字幕文件。目前支持**srt**、**ass**格式。
                                 */
                                Input: {
                                    /**
                                     * 输入文件的OSS Object。
                                     * @example `example-output.flv`
                                     */
                                    Object: string;
                                    /**
                                     * 输入文件所在的OSS Location。
                                     * @example `oss-cn-hangzhou`
                                     */
                                    Location: string;
                                    /**
                                     * 输入文件所在的OSS Bucket。
                                     * @example `example-bucket-****`
                                     */
                                    Bucket: string;
                                };
                            }[];
                        };
                        SubtitleList: {
                            /**
                             * 字幕列表。
                             */
                            Subtitle: {
                                /**
                                 * 音轨。格式：`0:{流}:{流序号} `，即`0:a:{audio_index}`。流取值为a: audio音频流，序号的含义是音频流列表的下标，序号从0开始。
                                 * @example `0:a:0`
                                 */
                                Map: string;
                            }[];
                        };
                    };
                    /**
                     * 媒体属性。
                     */
                    Properties: {
                        /**
                         * 视频宽。
                         * @example `1280`
                         */
                        Width: string;
                        /**
                         * 视频长。
                         * @example `720`
                         */
                        Height: string;
                        /**
                         * 时长。
                         * @example `55`
                         */
                        Duration: string;
                        /**
                         * 帧率，数字。
                         * @example `25`
                         */
                        Fps: string;
                        /**
                         * 码率。
                         * @example `1000`
                         */
                        Bitrate: string;
                        /**
                         * 文件格式。
                         * @example `QuickTime / MOV`
                         */
                        FileFormat: string;
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
                                     * 视频流序号，标识视频流在整个媒体流中的位置。
                                     * @example `0`
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
                                     * 编码信号分辨率比。
                                     * @example `1:1`
                                     */
                                    Sar: string;
                                    /**
                                     * 语言。更多信息，请参见[FFmeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)、[ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)。
                                     * @example `eng`
                                     */
                                    Lang: string;
                                    /**
                                     * 编码格式长述名。
                                     * @example `H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10`
                                     */
                                    CodecLongName: string;
                                    /**
                                     * 视频分辨率长。
                                     * @example `720`
                                     */
                                    Height: string;
                                    /**
                                     * 总帧数。
                                     * @example `25`
                                     */
                                    NumFrames: string;
                                    /**
                                     * 码率。
                                     * @example `1496.46`
                                     */
                                    Bitrate: string;
                                    /**
                                     * 编码格式标记文本。
                                     * @example `avc1`
                                     */
                                    CodecTagString: string;
                                    /**
                                     * 是否有B帧。
                                     * @example `2`
                                     */
                                    HasBFrames: string;
                                    /**
                                     * 编码预置。
                                     * @example `high`
                                     */
                                    Profile: string;
                                    /**
                                     * 起始时间。
                                     * @example `0.000000`
                                     */
                                    StartTime: string;
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
                                         * @example `100`
                                         */
                                        AvgBitrate: string;
                                        /**
                                         * 最大消耗带宽。
                                         * @example `10`
                                         */
                                        CostBandwidth: string;
                                    };
                                    /**
                                     * 编码显示分辨率比。
                                     * @example `16:9`
                                     */
                                    Dar: string;
                                    /**
                                     * 编码格式简述名。
                                     * @example `h264`
                                     */
                                    CodecName: string;
                                    /**
                                     * 视频分辨率宽，数字。
                                     * @example `1280`
                                     */
                                    Width: string;
                                    /**
                                     * 时长。
                                     * @example `17.225542`
                                     */
                                    Duration: string;
                                    /**
                                     * 帧率。
                                     * @example `23.976025`
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
                                     * @example `51`
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
                                     * 语言。更多信息，请参见[FFmeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)、[ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)。
                                     * @example `eng`
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
                                     * @example `25`
                                     */
                                    NumFrames: string;
                                    /**
                                     * 码率。
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
                                     * 编码格式简述名。
                                     * @example `aac`
                                     */
                                    CodecName: string;
                                    /**
                                     * 时长。
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
                                 * 字幕流列表。
                                 */
                                SubtitleStream: {
                                    /**
                                     * 字幕流序号，标识字幕流在整个媒体流中的位置。
                                     * @example `1`
                                     */
                                    Index: string;
                                    /**
                                     * 语言。更多信息，请参见[FFmeg语言定义](https://www.ffmpeg.org/ffmpeg-all.html#Metadata)、[ISO-639](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)。
                                     * @example `eng`
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
                             * 文件大小。
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
                             * @example `QuickTime / MOV`
                             */
                            FormatLongName: string;
                            /**
                             * 总时长。
                             * @example `55`
                             */
                            Duration: string;
                            /**
                             * 总码率。
                             * @example `1000`
                             */
                            Bitrate: string;
                            /**
                             * 容器、封装格式简述名。可取值：mov、mp4、m4a、3gp、3g2、mj2。
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
                };
                /**
                 * 管道ID。
                 * @example `88c6ca184c0e47098a5b665e2a126797`
                 */
                PipelineId: string;
                /**
                 * 作业输入。
                 */
                Input: {
                    /**
                     * 作业输入的OSS Object。
                     * @example `example.flv`
                     */
                    Object: string;
                    /**
                     * 作业输入的OSS Location。
                     * @example `oss-cn-hangzhou`
                     */
                    Location: string;
                    /**
                     * 作业输入的OSS Bucket。
                     * @example `example-bucket-****`
                     */
                    Bucket: string;
                };
                /**
                 * MNS通知用户作业完成的消息结果。
                 */
                MNSMessageResult: {
                    /**
                     * 失败时错误信息ID。成功时此参数不返回。
                     * @example `123`
                     */
                    MessageId: string;
                    /**
                     * 失败时错误信息。成功时此参数不返回。
                     * @example `The resource operated "%s" cannot be found.`
                     */
                    ErrorMessage: string;
                    /**
                     * 失败时错误码。成功时此参数不返回。
                     * @example `InvalidParameter.ResourceNotFound`
                     */
                    ErrorCode: string;
                };
            };
            /**
             * 是否成功。可取值：
             * - **true**：成功。
             * - **false**：失败。
             * @example `true`
             */
            Success: boolean;
            /**
             * 创建作业失败时错误码。创建成功时此参数不返回。
             * @example `InvalidParameter.NullValue`
             */
            Code: string;
            /**
             * 创建作业失败时错误消息。创建成功时此参数不返回。
             * @example `The specified parameter "%s" cannot be null.`
             */
            Message: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `25818875-5F78-4A45S71F6-D73936451234`
     */
    RequestId: string;
}
