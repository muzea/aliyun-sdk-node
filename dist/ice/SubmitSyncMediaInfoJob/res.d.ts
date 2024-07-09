export interface SubmitSyncMediaInfoJobResponse {
    /**
     * 请求 ID
     * @example `31E30781-9495-5E2D-A84D-759B0A01E262`
     */
    RequestId: string;
    /**
     * MediaInfoJobDTO
     */
    MediaInfoJob: {
        /**
         * 任务名字。
         * @example `job-name`
         */
        Name: string;
        /**
         * 任务来源。 API: API, WorkFlow: 工作流, Console: 控制台
         * @example `API`
         */
        TriggerSource: string;
        /**
         * 任务 ID。
         * @example `ab4802364a2e49208c99efab82dfa8e8`
         */
        JobId: string;
        /**
         * 任务输入。
         */
        Input: {
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
        /**
         * 是否异步处理。
         * @example `true`
         */
        Async: boolean;
        /**
         * 用户数据。
         * @example `user-data`
         */
        UserData: string;
        /**
         * 调度信息。
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
         * 任务状态 - Init: 已提交, Success: 成功, Fail: 失败
         * @example `Init`
         */
        Status: string;
        /**
         * 任务提交信息。
         * @example `{}`
         */
        SubmitResultJson: any;
        /**
         * 媒体信息详情。
         */
        MediaInfoProperty: {
            /**
             * 基础文件信息。
             */
            FileBasicInfo: {
                /**
                 * 媒资ID
                 * @example `999e68259c924f52a6be603cbb3f91cc`
                 */
                MediaId: string;
                /**
                 * 文件名。
                 * @example `file.m3u8`
                 */
                FileName: string;
                /**
                 * 文件状态。
                 * 取值：
                 * - Normal
                 * @example `Normal`
                 */
                FileStatus: string;
                /**
                 * 文件类型。
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
                 * 时长。
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
                 * @example `us`
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
                 * - 0：没有 B 帧,
                 * - 1：有一个 B 帧,
                 * - 2：有多个连续 B 帧。
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
                 * 时长。
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
                 * @example `zh`
                 */
                Lang: string;
                /**
                 * 视频画面旋转角度。
                 * @example `0`
                 */
                Rotate: string;
            }[];
        };
        /**
         * 任务提交时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-01-12T08:49:41Z`
         */
        SubmitTime: string;
        /**
         * 任务完成时间。格式为: yyyy-MM-ddTHH:mm:ssZ 。
         * @example `2022-01-12T08:49:41Z`
         */
        FinishTime: string;
        /**
         * 请求 ID。
         * @example `4879B9DE-E4B6-19DC-91F5-9D5F4DCE4168`
         */
        RequestId: string;
    };
}
