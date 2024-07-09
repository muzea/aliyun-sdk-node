export interface GetMediaInfoResponse {
    /**
     * 请求ID
     * @example `2FDE2411-DB8D-4A9A-875B-275798F14A5E`
     */
    RequestId: string;
    /**
     * 媒资信息
     */
    MediaInfo: {
        /**
         * 媒资ID
         * @example `****20b48fb04483915d4f2cd8ac****`
         */
        MediaId: string;
        /**
         * BasicInfo
         */
        MediaBasicInfo: {
            /**
             * MediaId
             * @example `****20b48fb04483915d4f2cd8ac****`
             */
            MediaId: string;
            /**
             * 被查询的媒资在相应系统中的地址
             * @example `https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4`
             */
            InputURL: string;
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
             * @example `标题`
             */
            Title: string;
            /**
             * 内容描述
             * @example `描述`
             */
            Description: string;
            /**
             * 分类
             * @example `分类`
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
             * @example `userDataTest`
             */
            UserData: string;
            /**
             * 截图
             * @example `[
                "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00001.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>",
                "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00002.jpg?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>",
                "http://example-bucket.oss-cn-shanghai.aliyuncs.com/snapshot-00003.jpg?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>"
            ]`
             */
            Snapshots: string;
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
            /**
             * 分类ID
             * @example `3048`
             */
            CateId: number;
            /**
             * 媒资所属业务
             * @example `ICE`
             */
            Biz: string;
            /**
             * 媒资上传来源
             * @example `general`
             */
            UploadSource: string;
            /**
             * 分类名称
             * @example `cateName`
             */
            CateName: string;
            /**
             * 自定义ID，仅支持小写字母、大写字母、数字、横线、下划线，长度6-64位。用户维度唯一。
             * @example `123-1234`
             */
            ReferenceId: string;
        };
        /**
         * FileInfo列表
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
                 * @example `30611502`
                 */
                FileSize: string;
                /**
                 * 文件OSS地址
                 * @example `http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>`
                 */
                FileUrl: string;
                /**
                 * 文件存储区域
                 * @example `cn-shanghai`
                 */
                Region: string;
                /**
                 * 封装格式
                 * @example `mov,mp4,m4a,3gp,3g2,mj2`
                 */
                FormatName: string;
                /**
                 * 时长
                 * @example `216.206667`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `1132.68`
                 */
                Bitrate: string;
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
                 * 文件创建时间
                 * @example `2020-12-26T04:11:08Z`
                 */
                CreateTime: string;
                /**
                 * 文件修改时间
                 * @example `2020-12-26T04:11:10Z`
                 */
                ModifiedTime: string;
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
                 * @example `1/24000`
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
                 * @example `16.200998`
                 */
                Duration: string;
                /**
                 * 码率
                 * @example `127.794`
                 */
                Bitrate: string;
                /**
                 * 音频帧率
                 * @example `8`
                 */
                Fps: string;
                /**
                 * 总帧数
                 * @example `10`
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
        /**
         * AI 分析原始数据
         */
        AiRoughData: {
            /**
             * AI分析原始结果
             * @example `https://sample-bucket.cn-shanghai.aliyuncs.com/result.json`
             */
            Result: string;
            /**
             * AI分析状态：
             * - Analyzing 分析中
             * - AnalyzeSuccess 分析成功
             * - AnalyzeFailed 分析失败
             * - Saving 入库中
             * - SaveSuccess 入库成功
             * - SaveFailed 入库失败
             * - Deleting 删除中
             * - DeleteSuccess 删除成功
             * - DeleteFailed 删除失败
             * @example `Analyzing`
             */
            Status: string;
            /**
             * 入库类型，智能分析完成后是否入搜索库。取值：
             * - TEXT 文本库
             * @example `TEXT`
             */
            SaveType: string;
            /**
             * AI分类，取值：
             * - 生活
             * - 颜值
             * - 萌宠
             * - 资讯
             * - 广告
             * - 环境资源
             * - 汽车
             * @example `生活`
             */
            AiCategory: string;
            /**
             * AI任务ID
             * @example `****483915d4f2cd8ac20b48fb04****`
             */
            AiJobId: string;
            /**
             * 标签任务
             */
            StandardSmartTagJob: {
                /**
                 * AI任务ID
                 * @example `****483915d4f2cd8ac20b48fb04****`
                 */
                AiJobId: string;
                /**
                 * AI分析状态：
                 * - Analyzing 分析中
                 * - AnalyzeSuccess 分析成功
                 * - AnalyzeFailed 分析失败
                 * @example `Analyzing`
                 */
                Status: string;
                /**
                 * 标签结果URL。
                 * @example `http://xx.oss-cn-shanghai.aliyuncs.com/result2.txt`
                 */
                ResultUrl: string;
                /**
                 * 标签识别结果列表。
                 */
                Results: {
                    /**
                     * 分析结果的具体数据，以 JSON 字符串表示。不同 Type 的数据结构详见[Result 参数说明](https://help.aliyun.com/zh/ims/developer-reference/api-ice-2020-11-09-querysmarttagjob?spm=a2c4g.11186623.0.0.521d48b7KfapOL#api-detail-40)。
                     * @example `{"autoChapters": [...]}`
                     */
                    Data: string;
                    /**
                     * 标签识别类型，取值：
                     * - NLP：NLP 处理结果
                     * @example `NLP`
                     */
                    Type: string;
                }[];
            };
        };
    };
}
