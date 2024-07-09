export interface SubmitAnalysisJobResponse {
    /**
     * 请求ID。
     * @example `B52658D4-07AB-43CD-82B0-210958A65E23`
     */
    RequestId: string;
    /**
     * 系统预置模板分析作业。
     */
    AnalysisJob: {
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
         * 作业状态。
         * - **Submitted**：已提交。
         * - **Analyzing**：分析中。
         * - **Success**：分析成功。
         * - **Fail**：分析失败。
         * @example `Success`
         */
        State: string;
        /**
         * 作业配置。
         */
        AnalysisConfig: {
            /**
             * 输出质量控制。
             */
            QualityControl: {
                /**
                 * 播放方式。
                 * - **network**：在线。
                 * - **local**：本地。
                 * - 默认值：**network**。
                 * @example `network`
                 */
                MethodStreaming: string;
                /**
                 * 输出质量等级。
                 * @example `50`
                 */
                RateQuality: string;
            };
            /**
             * 属性控制。
             */
            PropertiesControl: {
                /**
                 * 强制扫描模式判定。
                 * - **Auto**：自动。
                 * - **Force**：强制做deinterlace。
                 * - **None**：强制不做deinterlace。
                 * @example `Force`
                 */
                Deinterlace: string;
                /**
                 * 视频裁切配置。
                 */
                Crop: {
                    /**
                     * 裁切上边距。
                     * > 若**Mode**为Auto或None，则此值失效。
                     * @example `8`
                     */
                    Top: string;
                    /**
                     * 裁切后宽。
                     * > 若**Mode**为Auto或None，则此值失效。
                     * @example `8`
                     */
                    Width: string;
                    /**
                     * 裁切后高。
                     * > 若**Mode**为Auto或None，则此值失效。
                     * @example `8`
                     */
                    Height: string;
                    /**
                     * 裁切左边距。
                     * > 若**Mode**为Auto或None，则此值失效。
                     * @example `8`
                     */
                    Left: string;
                    /**
                     * 裁切方式。取值：
                     * - **Auto**：自动（默认）。
                     * - **Force**：强制。
                     * - **None**：强制不做。
                     * @example `Auto`
                     */
                    Mode: string;
                };
            };
        };
        /**
         * 分析失败时错误信息。
         * @example `The resource operated \"PipelineId\" cannot be found`
         */
        Message: string;
        /**
         * 任务在其对应管道内的优先级。
         * - 取值范围：**\[1,10\]**。10为最高优先级。
         * - 默认值：**10**。
         * @example `10`
         */
        Priority: string;
        /**
         * MNS通知用户作业完成的结果。
         */
        MNSMessageResult: {
            /**
             * 成功时消息ID。分析失败时不返回此参数。
             * @example `3ca84a39a9024f19853b21be9cf9****`
             */
            MessageId: string;
            /**
             * 失败时错误信息。分析成功时不返回此参数。
             * @example `The resource operated \"PipelineId\" cannot be found`
             */
            ErrorMessage: string;
            /**
             * 失败时错误码。分析成功时不返回此参数。
             * @example `InvalidParameter.ResourceNotFound`
             */
            ErrorCode: string;
        };
        TemplateList: {
            /**
             * 作业输出的预置模板列表。
             */
            Template: {
                /**
                 * 视频编解码配置。
                 */
                Video: {
                    /**
                     * 缓冲区大小。
                     * - 单位：Kb。
                     * - 默认值：**6000**。
                     * @example `5000`
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
                     * 视频颜色格式。包含yuv420p，yuvj420p等标准颜色格式。
                     * @example `yuvj420p`
                     */
                    PixFmt: string;
                    /**
                     * 编解码格式。默认值：**H.264**。
                     * @example `H.264`
                     */
                    Codec: string;
                    /**
                     * 视频高。
                     * - 单位：px。
                     * - 默认值：**视频原始高度**。
                     * @example `1880`
                     */
                    Height: string;
                    /**
                     * 视频质量控制度。
                     * @example `15`
                     */
                    Qscale: string;
                    /**
                     * 视频平均码率。单位：Kbps。
                     * @example `10`
                     */
                    Bitrate: string;
                    /**
                     * 视频码率峰值。单位：Kbps。
                     * @example `10`
                     */
                    Maxrate: string;
                    /**
                     * 编码级别。
                     * - **baseline**：针对移动设备。
                     * - **main**：针对标准分辨率设备。
                     * - **high**：针对高分辨率设备。
                     * - 默认值：**high**。
                     * @example `baseline`
                     */
                    Profile: string;
                    /**
                     * 码率-质量控制因子。
                     * - 默认值：编码格式为H264，默认值为**23**。编码格式为H265，默认值为**26**。
                     * - 如果设置了Crf，则Bitrate的设置失效。
                     * @example `27`
                     */
                    Crf: string;
                    /**
                     * 关键帧间最大帧数。默认值：**250**。
                     * @example `1`
                     */
                    Gop: string;
                    /**
                     * 视频宽。
                     * - 单位：px。
                     * - 默认值：**视频原始宽度**。
                     * @example `1990`
                     */
                    Width: string;
                    /**
                     * 帧率。
                     * - 当输入文件帧率超过60时取60。
                     * - 默认值：取**输入文件帧率**。
                     * @example `60`
                     */
                    Fps: string;
                    /**
                     * 视频算法器预置。支持veryfast（超快）、fast（快）、medium（中等）、slow（慢）、slower（超慢）。默认值：**medium**。
                     * @example `medium`
                     */
                    Preset: string;
                    /**
                     * 扫描模式。取值：
                     * - **interlaced**：交叉扫描。
                     * - **progressive**：顺序扫描。
                     * @example `progressive`
                     */
                    ScanMode: string;
                };
                /**
                 * 转码通用配置。
                 */
                TransConfig: {
                    /**
                     * 转码模式。取值：onepass、twopass、CBR。默认值：**onepass**。
                     * @example `onepass`
                     */
                    TransMode: string;
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
                     * gif格式。
                     */
                    Gif: {
                        /**
                         * gif的loop间隔，单位为百分之一秒，比如500代表间隔为5秒。
                         * @example `0`
                         */
                        FinalDelay: string;
                        /**
                         * gif与webp循环次数，默认不循环。
                         * @example `0`
                         */
                        Loop: string;
                    };
                    /**
                     * 切片配置。
                     */
                    Segment: {
                        /**
                         * 分片时长。单位：秒。
                         * @example `60`
                         */
                        Duration: string;
                    };
                };
                /**
                 * 模板名称。
                 * @example `FLV-UD`
                 */
                Name: string;
                /**
                 * 音频编解码配置。
                 */
                Audio: {
                    /**
                     * 音频编码预置。当**Codec**为**aac**时可取值：aac_low、aac_he、aac_he_v2、aac_ld、aac_eld。
                     * @example `aac_low`
                     */
                    Profile: string;
                    /**
                     * 音频编解码格式。默认值：**aac**。
                     * @example `mp3`
                     */
                    Codec: string;
                    /**
                     * 采样率。
                     * - 单位：Hz。
                     * - 默认值：**44100**。
                     * @example `32000`
                     */
                    Samplerate: string;
                    /**
                     * 音频质量控制度。
                     * @example `10`
                     */
                    Qscale: string;
                    /**
                     * 声道数。默认值：**2**。
                     * @example `1`
                     */
                    Channels: string;
                    /**
                     * 输出文件的音频码率。
                     * - 单位：Kbps。
                     * - 默认值：**128**。
                     * @example `8`
                     */
                    Bitrate: string;
                };
                /**
                 * 转码模板ID。
                 * @example `S00000000-00****`
                 */
                Id: string;
                /**
                 * 容器。
                 */
                Container: {
                    /**
                     * 容器格式。
                     * @example `flv`
                     */
                    Format: string;
                };
            }[];
        };
        /**
         * 用户自定义数据。
         * @example `testid-001`
         */
        UserData: string;
        /**
         * 分析失败时错误码。分析成功时不返回此参数。
         * @example `InvalidParameter.ResourceNotFound`
         */
        Code: string;
        /**
         * 作业输入。
         */
        InputFile: {
            /**
             * OSS的Object。
             * @example `example.flv`
             */
            Object: string;
            /**
             * OSS的服务区域。
             * @example `oss-cn-hangzhou`
             */
            Location: string;
            /**
             * OSS的Bucket。
             * @example `example-bucket`
             */
            Bucket: string;
        };
        /**
         * 管道ID。
         * @example `bb558c1cc25b45309aab5be44d19****`
         */
        PipelineId: string;
        /**
         * 模板分析作业ID。
         * @example `57f6aa3f84824309bcba67231b40****`
         */
        Id: string;
    };
}
