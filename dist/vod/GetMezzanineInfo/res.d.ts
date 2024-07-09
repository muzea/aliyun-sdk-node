export interface GetMezzanineInfoResponse {
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-D7393642CA58****`
     */
    RequestId: string;
    /**
     * 文件信息。
     */
    Mezzanine: {
        /**
         * 文件创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-11-14T09:15:50Z`
         */
        CreationTime: string;
        /**
         * 文件状态。取值：
         * - **Uploading**（上传中）：文件的初始状态，表示正在上传。
         * - **Normal**（正常）：文件上传成功。
         * - **UploadFail**（失败）：文件上传失败。
         * - **Deleted**（删除）：文件被删除。
         * @example `Normal`
         */
        Status: string;
        /**
         * 源文件地址。
         * @example `http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/27ffc438-164h67f57ef-0005-6884-51a-1****.mp4`
         */
        FileURL: string;
        /**
         * 视频ID。
         * @example `1f1a6fc03ca04814031b8a6559e****`
         */
        VideoId: string;
        /**
         * 文件高度。单位：px。
         * @example `540`
         */
        Height: number;
        /**
         * 文件码率。单位：Kbps。
         * @example `771.2280`
         */
        Bitrate: string;
        /**
         * 文件名称。
         * @example `27ffc438-164h67f57ef-0005-6884-51a-1****.mp4`
         */
        FileName: string;
        /**
         * 输出地址类型。取值范围 ：
         * - **oss**：回源地址。
         * - **cdn**（默认）：加速地址。
         * > 仅支持播放格式为MP4的OSS地址。
         * @example `oss`
         */
        OutputType: string;
        /**
         * 文件宽度。单位：px。
         * @example `960`
         */
        Width: number;
        /**
         * 文件大小。单位：Byte。
         * @example `4096477`
         */
        Size: number;
        /**
         * 文件时长。单位：秒。
         * @example `42.4930`
         */
        Duration: string;
        /**
         * 文件帧率，每秒多少帧。
         * @example `25.0000`
         */
        Fps: string;
        /**
         * 音频流信息。
         */
        AudioStreamList: {
            /**
             * 音频流序号，标识音频流在整个媒体流中的位置。
             * @example `0`
             */
            Index: string;
            /**
             * 时基。
             * @example `0.000000`
             */
            Timebase: string;
            /**
             * 采样格式。
             * @example `fltp`
             */
            SampleFmt: string;
            /**
             * 采样率。
             * @example `44100`
             */
            SampleRate: string;
            /**
             * 声道输出样式。取值：
             * - **mono**：单声道。
             * - **stereo**：双声道。
             * @example `mono`
             */
            ChannelLayout: string;
            /**
             * 语言。
             * @example `und`
             */
            Lang: string;
            /**
             * 编码格式长述名。
             * @example `AAC (Advanced Audio Coding)`
             */
            CodecLongName: string;
            /**
             * 声道数。
             * @example `1`
             */
            Channels: string;
            /**
             * 总帧数。
             * @example `1`
             */
            NumFrames: string;
            /**
             * 码率。
             * @example `62.885`
             */
            Bitrate: string;
            /**
             * 编码格式标记文本。
             * @example `mp4a`
             */
            CodecTagString: string;
            /**
             * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-01-11T12:00:00Z`
             */
            StartTime: string;
            /**
             * 编码格式简述名。
             * @example `aac`
             */
            CodecName: string;
            /**
             * 时长。
             * @example `3.227574`
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
        /**
         * 视频流信息。
         */
        VideoStreamList: {
            /**
             * 时基。
             * @example `0.000000`
             */
            Timebase: string;
            /**
             * 视频流序号，标识视频流在整个媒体流中的位置。
             * @example `1`
             */
            Index: string;
            /**
             * 平均帧率。
             * @example `30.0`
             */
            AvgFPS: string;
            /**
             * 像素格式。
             * @example `yuv420p`
             */
            PixFmt: string;
            /**
             * 语言。
             * @example `und`
             */
            Lang: string;
            /**
             * 编码信号分辨率比。
             * @example `0:1`
             */
            Sar: string;
            /**
             * 视频分辨率长。
             * @example `320`
             */
            Height: string;
            /**
             * 编码格式长述名。
             * @example `H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10`
             */
            CodecLongName: string;
            /**
             * 总帧数。
             * @example `0`
             */
            NumFrames: string;
            /**
             * 文件码率。单位：Kbps。
             * @example `500`
             */
            Bitrate: string;
            /**
             * 视频旋转角度，取值范围：**[0，360)**。
             * @example `90`
             */
            Rotate: string;
            /**
             * 编码格式标记文本。
             * @example `avc1`
             */
            CodecTagString: string;
            /**
             * 是否有B帧。
             * @example `0`
             */
            HasBFrames: string;
            /**
             * 编码预置。
             * @example `Main`
             */
            Profile: string;
            /**
             * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-01-11T12:00:00Z`
             */
            StartTime: string;
            /**
             * 编码显示分辨率比。
             * @example `0:1`
             */
            Dar: string;
            /**
             * 编码格式简述名。
             * @example `h264`
             */
            CodecName: string;
            /**
             * 视频分辨率宽。
             * @example `568`
             */
            Width: string;
            /**
             * 时长。
             * @example `3.166667`
             */
            Duration: string;
            /**
             * 目标帧率。
             * @example `30.0`
             */
            Fps: string;
            /**
             * 编码格式标记。
             * @example `0x31637661`
             */
            CodecTag: string;
            /**
             * 编码时基。
             * @example `1/60`
             */
            CodecTimeBase: string;
            /**
             * 编码等级。
             * @example `30`
             */
            Level: string;
            /**
             * 视频流HDR类型。
             * @example `HDR`
             */
            HDRType: string;
        }[];
        /**
         * 媒资存储类型。取值：
         * - **Standard**：标准。
         * - **IA**：媒资低频。
         * - **Archive**：媒资归档。
         * - **ColdArchive**：媒资冷归档。
         * - **SourceIA**：源文件低频。
         * - **SourceArchive**：源文件归档。
         * - **SourceColdArchive**：源文件冷归档。
         * - **Changing**：媒资存储类型变更中。
         * - **SourceChanging**：源文件存储类型变更中。
         * @example `Standard`
         */
        StorageClass: string;
        /**
         * 媒资解冻状态。取值：
         * - **Processing**：解冻中。
         * - **Success**：解冻成功。
         * - **Failed**：解冻失败。
         * @example `Success`
         */
        RestoreStatus: string;
        /**
         * 媒资解冻有效期。
         * @example `2023-03-30T10:14:14Z`
         */
        RestoreExpiration: string;
    };
}
