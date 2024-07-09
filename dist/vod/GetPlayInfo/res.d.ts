export interface GetPlayInfoResponse {
    /**
     * 请求ID。
     * @example `F552E596-967D-5500-842F-17E6364****`
     */
    RequestId: string;
    /**
     * 音/视频基本信息。
     */
    VideoBase: {
        /**
         * 音/视频创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-06-26T06:38:48Z`
         */
        CreationTime: string;
        /**
         * 音/视频状态。各取值及描述，请参见[Status：音视频状态](~~52839#title-vqg-8cz-7p8~~)。
         * @example `Normal`
         */
        Status: string;
        /**
         * 音/视频ID。
         * @example `93ab850b4f654b6e91d24d81d44****`
         */
        VideoId: string;
        /**
         * 音/视频封面地址。
         * @example `http://example.aliyundoc.com/sample.jpg?auth_key=2333232-atb****`
         */
        CoverURL: string;
        /**
         * 音/视频时长。单位：秒。
         * @example `3.1667`
         */
        Duration: string;
        /**
         * 音/视频标题。
         * @example `阿里云VOD`
         */
        Title: string;
        /**
         * 媒体文件类型，取值：
         * - **video**：视频。
         * - **audio**：纯音频。
         * @example `video`
         */
        MediaType: string;
        /**
         * 弹幕蒙版数据的地址。
         * @example `http://example.aliyundoc.com/****?auth_key=abdf2123-6783232****`
         */
        DanMuURL: string;
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
    };
    PlayInfoList: {
        /**
         * 音/视频播放信息（流信息）。
         */
        PlayInfo: {
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-04-18T07:37:15Z`
             */
            CreationTime: string;
            /**
             * 媒体流状态，取值：
             * - **Normal**：正常状态，标记的是每种清晰度和格式的一路最新转码完成的流的状态。
             * - **Invisible**：不可见状态，当每种清晰度和格式有多路重复的转码流时，除了最新的一路流会被标记为正常状态，其他流会被标记为不可见状态。
             * @example `Normal`
             */
            Status: string;
            /**
             * 音视频转码输出规格。各取值及描述，请参见[输出规格：Specification](~~124671#section-6bv-l0g-opq~~)。
             * @example `H264.LD`
             */
            Specification: string;
            /**
             * 转码类型。取值：
             * - **0**：普通转码。
             * - **1.0**：窄带高清1.0转码。
             * - **2.0**：窄带高清2.0转码。
             * @example `0`
             */
            NarrowBandType: string;
            /**
             * 媒体流高度。单位：px。
             * @example `640`
             */
            Height: number;
            /**
             * 媒体流码率。单位：Kbps。
             * @example `450.878`
             */
            Bitrate: string;
            /**
             * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-04-20T06:32:19Z`
             */
            ModificationTime: string;
            /**
             * 当前媒体流关联的水印模板ID。
             * @example `dgfn26457856****`
             */
            WatermarkId: string;
            /**
             * 媒体流是否加密流，取值：
             * - **0**：否。
             * - **1**：是。
             * @example `1`
             */
            Encrypt: number;
            /**
             * 视频流清晰度定义。取值：
             * - **FD**：流畅。
             * - **LD**：标清。
             * - **SD**：高清。
             * - **HD**：超清
             * - **OD**：原画。
             * - **2K**：2K。
             * - **4K**：4K。
             * - **SQ**：普通音质。
             * - **HQ**：高音质。
             * - **AUTO**：自适应码率。
             * @example `LD`
             */
            Definition: string;
            /**
             * 媒体流加密类型。取值：
             * - **AliyunVoDEncryption**：阿里云视频加密。
             * - **HLSEncryption**：HLS标准加密。
             * > 如果加密类型为**AliyunVoDEncryption**，则只能使用阿里云播放器SDK才能正常播放。
             * @example `AliyunVoDEncryption`
             */
            EncryptType: string;
            /**
             * 媒体流类型。
             * 若媒体流为视频则取值：**video**，若是纯音频则取值：**audio**。
             * @example `video`
             */
            StreamType: string;
            /**
             * 媒体流转码的作业ID。作为媒体流的唯一标识。
             * @example `80e9c6580e754a798c3c19c59b16****`
             */
            JobId: string;
            /**
             * 媒体流大小。单位：Byte。
             * @example `418112`
             */
            Size: number;
            /**
             * 媒体流宽度。单位：px。
             * @example `360`
             */
            Width: number;
            /**
             * 媒体流帧率。单位：帧/每秒。
             * @example `25`
             */
            Fps: string;
            /**
             * 媒体流长度。单位：秒。
             * @example `9.0464`
             */
            Duration: string;
            /**
             * 视频流的播放地址。
             * @example `https://example.aliyundoc.com/d52ee123f331466aabf6ab32a93d****​/a777f9e24e6e47a2a942467d5c38ea37-8ee8e04293c6657fdda282bc422704****.m3u8`
             */
            PlayURL: string;
            /**
             * 媒体流格式。
             * - 若媒体文件为视频则取值： **mp4**、 **m3u8**。
             * -  若是纯音频则取值：**mp3**。
             * @example `m3u8`
             */
            Format: string;
            /**
             * 媒体流HDR类型。取值：
             * - HDR
             * - HDR10
             * - HLG
             * - DolbyVision
             * - HDRVivid
             * - SDR+
             * @example `HLG`
             */
            HDRType: string;
            /**
             * 颜色位深。取值为整数。
             * @example `8`
             */
            BitDepth: number;
            /**
             * 数字水印类型。取值：
             * - **1**：溯源水印。
             * - **2**：版权水印。
             * @example `2`
             */
            JobType: number;
            /**
             * 版权水印的自定义水印信息。仅当`JobType`为`2`时返回该字段。
             * @example `CopyrightMarkTest`
             */
            JobExt: string;
        }[];
    };
}
