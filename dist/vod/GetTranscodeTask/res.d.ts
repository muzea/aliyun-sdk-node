export interface GetTranscodeTaskResponse {
    /**
     * 请求ID。
     * @example `F4C6D5BE-BF13-45*****6C-516EA8906DCD`
     */
    RequestId: string;
    /**
     * 转码任务信息。
     */
    TranscodeTask: {
        /**
         * 转码任务创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:35:12Z`
         */
        CreationTime: string;
        /**
         * 触发类型。取值：
         * - **Auto**：上传视频，自动触发。
         * - **Manual** ：SubmitTranscodeJobs接口触发。
         * @example `Auto `
         */
        Trigger: string;
        /**
         * 转码任务状态。取值：
         * - **Processing**：处理中。
         * - **Partial**：部分转码完成。
         * - **CompleteAllSucc**：全部处理完成，且全部转码成功。
         * - **CompleteAllFail**：全部处理完成，且全部转码失败，如果源片有问题，则不会发起任何转码作业，整个转码任务失败。
         * - **CompletePartialSucc**：全部转码完成，但仅部分转码成功。
         * @example `Processing`
         */
        TaskStatus: string;
        /**
         * 音/视频ID。
         * @example `883f5d98107*****b7f20aaa352f`
         */
        VideoId: string;
        /**
         * 转码任务完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2019-01-23T12:40:12Z`
         */
        CompleteTime: string;
        /**
         * 转码使用的模板组ID。
         * @example `b500c7094bd241*****3e9900752d7c3`
         */
        TranscodeTemplateGroupId: string;
        /**
         * 转码任务ID。
         * @example `b1b65ab107e14*****3dbb900f6c1fe0`
         */
        TranscodeTaskId: string;
        /**
         * 转码作业信息。
         */
        TranscodeJobInfoList: {
            /**
             * 视频清晰度。取值：
             * - **LD**：流畅。
             * - **SD**：标清。
             * - **HD**：高清。
             * - **FHD**：超清。
             * - **OD**：原画。
             * - **2K**：2K。
             * - **4K**：4K。
             * - **SQ**：普通音质。
             * - **HQ**：高音质
             * - **AUTO**：自适应码率。仅当转码模板中配置了打包时才会有该清晰度输出，请参见[转码模板配置-PackageSetting](~~52839~~)。
             * > 该值为转码模板配置的清晰度标记，不表示转码输出文件实际的分辨率范围。
             * @example `LD`
             */
            Definition: string;
            /**
             * 转码作业创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-26T08:27:16Z`
             */
            CreationTime: string;
            /**
             * 转码源文件的OSS地址。
             * @example `http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/customerTrans/5b95e568f8e*****47f38e/31f1184c-*****b2a2-f94-c213f.wmv`
             */
            InputFileUrl: string;
            /**
             * 转码失败错误信息。
             * @example `ErrorMessage`
             */
            ErrorMessage: string;
            /**
             * 转码失败错误码。
             * @example `200`
             */
            ErrorCode: string;
            /**
             * 转码作业完成时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2019-02-26T08:30:16Z`
             */
            CompleteTime: string;
            /**
             * 转码作业处理进度。取值范围：`[0,100]`。
             * @example `100`
             */
            TranscodeProgress: number;
            /**
             * 转码任务优先级。
             * @example `6`
             */
            Priority: string;
            /**
             * 转码作业状态。
             * - **Transcoding**：转码中。
             * - **TranscodeSuccess**：转码成功。
             * - **TranscodeFail**：转码失败。
             * @example `Transcoding`
             */
            TranscodeJobStatus: string;
            /**
             * 转码使用的转码模板ID。
             * @example `174b0534fea3*****b51c8f0ad1374`
             */
            TranscodeTemplateId: string;
            /**
             * 转码作业ID。
             * @example `38f0e513c88*****85515f9d50be188`
             */
            TranscodeJobId: string;
            /**
             * 转码输出文件的信息。
             */
            OutputFile: {
                /**
                 * 视频流列表。
                 * @example `[{\"AvgFPS\":\"30.0\",\"Bitrate\":\"933.814\",\"CodecLongName\":\"H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10\",\"CodecName\":\"h264\",\"CodecTag\":\"0x31637661\",\"CodecTagString\":\"avc1\",\"CodecTimeBase\":\"1/60\",\"Dar\":\"9:16\",\"Duration\":\"12.033333\",\"Fps\":\"30.0\",\"HasBFrames\":\"2\",\"Height\":\"360\",\"Index\":\"0\",\"Lang\":\"und\",\"Level\":\"30\",\"PixFmt\":\"yuv420p\",\"Profile\":\"High\",\"Sar\":\"81:256\",\"StartTime\":\"0.000000\",\"Timebase\":\"1/15360\",\"Width\":\"640\"}]`
                 */
                VideoStreamList: string;
                /**
                 * 转码输出文件的OSS地址。
                 * @example `http://outin-40564*****e1403e7.oss-cn-shanghai.aliyuncs.com/883f5d*****f20aaa352f/c3be4f073*****7d5193ec8-{DestMd5}-od-S00000001-200000.mp4`
                 */
                OutputFileUrl: string;
                /**
                 * 转码输出文件使用的加密配置。取值：
                 * - **AliyunVoDEncryption**：阿里云视频加密（私有加密）。
                 * - **HLSEncryption**：HLS标准加密。
                 * @example `{\"EncryptType\":\"AliyunVoDEncryption\"}`
                 */
                Encryption: string;
                /**
                 * 转码输出文件视频画面高。单位：px。
                 * @example `360`
                 */
                Height: string;
                /**
                 * 字幕流列表。
                 * @example `[]`
                 */
                SubtitleStreamList: string;
                /**
                 * 转码输出文件平均码率。单位：Kbps。
                 * @example `964`
                 */
                Bitrate: string;
                /**
                 * 音频流列表。
                 * @example `"AudioStreamList": "[{\"Bitrate\":\"64.533\",\"ChannelLayout\":\"stereo\",\"Channels\":\"2\",\"CodecLongName\":\"AAC (Advanced Audio Coding)\",\"CodecName\":\"aac\",\"CodecTag\":\"0x6134706d\",\"CodecTagString\":\"mp4a\",\"CodecTimeBase\":\"1/44100\",\"Duration\":\"12.615533\",\"Index\":\"1\",\"Lang\":\"und\",\"SampleFmt\":\"fltp\",\"Samplerate\":\"44100\",\"StartTime\":\"-0.046440\",\"Timebase\":\"1/44100\"}]`
                 */
                AudioStreamList: string;
                /**
                 * 转码输出文件视频画面宽。单位：px。
                 * @example `640`
                 */
                Width: string;
                /**
                 * 转码输出文件的帧率。单位：帧/秒。
                 * @example `25`
                 */
                Fps: string;
                /**
                 * 转码输出文件时长。单位：秒。
                 * @example `12`
                 */
                Duration: string;
                /**
                 * 转码输出文件的封装格式。
                 * @example `m3u8`
                 */
                Format: string;
                /**
                 * 转码输出文件大小。单位：Byte。
                 * @example `851076`
                 */
                Filesize: number;
                /**
                 * 转码输出文件使用的水印ID列表。
                 */
                WatermarkIdList: string[];
            };
        }[];
    };
}
