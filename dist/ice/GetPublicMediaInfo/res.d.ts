export interface GetPublicMediaInfoResponse {
    /**
     * RequestId
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资信息
     */
    MediaInfo: {
        /**
         * 媒资ID
         * @example `icepublic-****14e501538aeef0a3140176f6****`
         */
        MediaId: string;
        /**
         * BasicInfo
         */
        MediaBasicInfo: {
            /**
             * MediaId
             * @example `icepublic-****14e501538aeef0a3140176f6****`
             */
            MediaId: string;
            /**
             * 媒资媒体类型
             * @example `video`
             */
            MediaType: string;
            /**
             * 媒资业务类型
             * @example `general`
             */
            BusinessType: string;
            /**
             * 来源
             * @example `oss`
             */
            Source: string;
            /**
             * 标题
             * @example `title`
             */
            Title: string;
            /**
             * 内容描述
             * @example `description`
             */
            Description: string;
            /**
             * 分类
             * @example `category`
             */
            Category: string;
            /**
             * 标签
             * @example `标签,tag1`
             */
            MediaTags: string;
            /**
             * 封面地址
             * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
             */
            CoverURL: string;
            /**
             * 用户数据
             * @example `{"key":"value"}`
             */
            UserData: string;
            /**
             * 资源状态
             * @example `Normal`
             */
            Status: string;
            /**
             * 媒资创建时间
             * @example `2020-12-26T04:11:08Z`
             */
            CreateTime: string;
            /**
             * 媒资修改时间
             * @example `2020-12-26T04:11:10Z`
             */
            ModifiedTime: string;
            /**
             * 媒资删除时间
             * @example `2020-12-26T04:11:15Z`
             */
            DeletedTime: string;
            /**
             * 雪碧图
             * @example `[{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]`
             */
            SpriteImages: string;
        };
        /**
         * 公共媒资动态元数据
         */
        DynamicMetaData: {
            /**
             * 类型。取值范围：
             * - "ai": AI原始结果统一化处理后的AI数据
             * - "user-defined": 用户自定义元数据
             * - "system": 系统自带
             * @example `system`
             */
            Type: string;
            /**
             * 元数据json
             * @example `{"AuditionUrl": "http://example-bucket.cdn.domain.com/example.mp4", "AuditionCount": 3}`
             */
            Data: string;
        };
        /**
         * FileInfos
         */
        FileInfoList: {
            /**
             * 文件基础信息，包含时长，大小等
             */
            FileBasicInfo: {
                /**
                 * 文件名
                 * @example `example.mp4`
                 */
                FileName: string;
                /**
                 * 文件状态
                 * @example `Normal`
                 */
                FileStatus: string;
                /**
                 * 文件类型
                 * @example `source_file`
                 */
                FileType: string;
                /**
                 * 文件大小（字节）
                 * @example `27007`
                 */
                FileSize: string;
                /**
                 * 版权媒资试听或试看地址。
                 * @example `http://example-bucket.cdn.domain.com/example.mp4`
                 */
                FileUrl: string;
                /**
                 * 文件存储区域
                 * @example `cn-shanghai`
                 */
                Region: string;
                /**
                 * 封装格式
                 * @example `mp4`
                 */
                FormatName: string;
                /**
                 * 时长
                 * @example `16.2`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `192.0`
                 */
                Bitrate: string;
                /**
                 * 宽
                 * @example `0`
                 */
                Width: string;
                /**
                 * 高
                 * @example `0`
                 */
                Height: string;
            };
            /**
             * 音频流信息，一个媒资可能有多条音频流
             */
            AudioStreamInfoList: {
                /**
                 * 音频流序号
                 * @example `1`
                 */
                Index: string;
                /**
                 * 编码格式简述名
                 * @example `aac`
                 */
                CodecName: string;
                /**
                 * 编码格式长述名
                 * @example `AAC (Advanced Audio Coding)`
                 */
                CodecLongName: string;
                /**
                 * 编码时基
                 * @example `1/44100`
                 */
                CodecTimeBase: string;
                /**
                 * 编码格式标记文本
                 * @example `mp4a`
                 */
                CodecTagString: string;
                /**
                 * 编码格式标记
                 * @example `0x6134706d`
                 */
                CodecTag: string;
                /**
                 * 编码预置
                 * @example `High`
                 */
                Profile: string;
                /**
                 * 采样格式
                 * @example `fltp`
                 */
                SampleFmt: string;
                /**
                 * 采样率
                 * @example `44100`
                 */
                SampleRate: string;
                /**
                 * 声道数
                 * @example `2`
                 */
                Channels: string;
                /**
                 * 声道输出样式
                 * @example `stereo`
                 */
                ChannelLayout: string;
                /**
                 * 时基
                 * @example `1/44100`
                 */
                Timebase: string;
                /**
                 * 起始时间
                 * @example `0.000000`
                 */
                StartTime: string;
                /**
                 * 时长
                 * @example `16.2`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `192.0`
                 */
                Bitrate: string;
                /**
                 * 音频帧率
                 * @example `10`
                 */
                Fps: string;
                /**
                 * 总帧数
                 * @example `162`
                 */
                NumFrames: string;
                /**
                 * 语言
                 * @example `und`
                 */
                Lang: string;
            }[];
            /**
             * 视频流信息，一个媒资可能有多条视频流
             */
            VideoStreamInfoList: {
                /**
                 * 视频流序号
                 * @example `0`
                 */
                Index: string;
                /**
                 * 编码格式简述名
                 * @example `h264`
                 */
                CodecName: string;
                /**
                 * 编码格式长述名
                 * @example `H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10`
                 */
                CodecLongName: string;
                /**
                 * 编码预置
                 * @example `High`
                 */
                Profile: string;
                /**
                 * 编码时基
                 * @example `1/48`
                 */
                CodecTimeBase: string;
                /**
                 * 编码格式标记文本
                 * @example `[0][0][0][0]`
                 */
                CodecTagString: string;
                /**
                 * 编码格式标记
                 * @example `0x0000`
                 */
                CodecTag: string;
                /**
                 * 宽
                 * @example `960`
                 */
                Width: string;
                /**
                 * 高
                 * @example `540`
                 */
                Height: string;
                /**
                 * 是否有B帧
                 * @example `2`
                 */
                HasBFrames: string;
                /**
                 * 编码信号分辨率比
                 * @example `0:1`
                 */
                Sar: string;
                /**
                 * 编码显示分辨率比
                 * @example `0:1`
                 */
                Dar: string;
                /**
                 * 像素格式
                 * @example `yuv420p`
                 */
                PixFmt: string;
                /**
                 * 编码等级
                 * @example `30`
                 */
                Level: string;
                /**
                 * 视频帧率
                 * @example `24.0`
                 */
                Fps: string;
                /**
                 * 平均帧率
                 * @example `24.0`
                 */
                AvgFPS: string;
                /**
                 * 时基
                 * @example `1/12288`
                 */
                Timebase: string;
                /**
                 * 起始时间
                 * @example `0.081706`
                 */
                StartTime: string;
                /**
                 * 时长
                 * @example `216.206706`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `1001.594`
                 */
                Bitrate: string;
                /**
                 * 总帧数
                 * @example `5184`
                 */
                NumFrames: string;
                /**
                 * 语言
                 * @example `und`
                 */
                Lang: string;
                /**
                 * 旋转
                 * @example `0`
                 */
                Rotate: string;
                /**
                 * 总帧数
                 * @example `5184`
                 */
                Nb_frames: string;
            }[];
            /**
             * 字幕流信息，一个媒资可能有多条字幕流
             */
            SubtitleStreamInfoList: {
                /**
                 * 字幕流序号
                 * @example `1`
                 */
                Index: string;
                /**
                 * 编码格式简述名
                 * @example `srt`
                 */
                CodecName: string;
                /**
                 * 编码格式长述名
                 * @example `SubRip Text`
                 */
                CodecLongName: string;
                /**
                 * 编码时基
                 * @example `29.97`
                 */
                CodecTimeBase: string;
                /**
                 * 编码格式标记文本
                 * @example `unicode`
                 */
                CodecTagString: string;
                /**
                 * 编码格式标记
                 * @example `unicode`
                 */
                CodecTag: string;
                /**
                 * 时基
                 * @example `30`
                 */
                Timebase: string;
                /**
                 * 起始时间
                 * @example `0`
                 */
                StartTime: string;
                /**
                 * 时长
                 * @example `1`
                 */
                Duration: string;
                /**
                 * 语言
                 * @example `und`
                 */
                Lang: string;
            }[];
        }[];
    };
}
