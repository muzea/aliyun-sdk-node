export interface SearchMediaResponse {
    /**
     * 请求ID。
     * @example `6F61C357-ACC0-57FB-876E-D5879533****`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `True`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 符合要求的媒资集合。
     */
    MediaInfoList: {
        /**
         * 媒资ID。
         * @example `3b187b3620c8490886cfc2a9578c****`
         */
        MediaId: string;
        /**
         * 媒资基础信息。
         */
        MediaBasicInfo: {
            /**
             * 媒资ID。
             * @example `132bd600fc3c71ec99476732a78f****`
             */
            MediaId: string;
            /**
             * 待注册的媒资在相应系统中的地址。
             * @example `oss://clipres/longvideo/material/voice/prod/20220418/07d7c799f6054dc3bbef250854cf8498165024814****`
             */
            InputURL: string;
            /**
             * 媒资媒体类型。
             * @example `video`
             */
            MediaType: string;
            /**
             * 媒资业务类型。
             * @example `opening`
             */
            BusinessType: string;
            /**
             * 来源。
             * @example `oss`
             */
            Source: string;
            /**
             * 标题。
             * @example `智能横屏转竖屏`
             */
            Title: string;
            /**
             * 内容描述。
             * @example `对这个视频进行转码处理了`
             */
            Description: string;
            /**
             * 分类。
             * @example `image`
             */
            Category: string;
            /**
             * 标签。
             * @example `tags,tags2
            `
             */
            MediaTags: string;
            /**
             * 封面地址。
             * @example `https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/e694372e-4f5b-4821-ae09-efd064f2****_large_cover_url.jpg`
             */
            CoverURL: string;
            /**
             * 用户数据。
             * @example `userData`
             */
            UserData: string;
            /**
             * 截图。
             * @example `[{"bucket":"example-bucket","count":"3","iceJobId":"******f48f0e4154976b2b8c45******","location":"oss-cn-beijing","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]`
             */
            Snapshots: string;
            /**
             * 资源状态。
             * @example `Normal`
             */
            Status: string;
            /**
             * 转码状态。
             * @example `Init`
             */
            TranscodeStatus: string;
            /**
             * 媒资创建时间。
             * @example `2020-12-01T19:48Z`
             */
            CreateTime: string;
            /**
             * 媒资修改时间。
             * @example `2020-12-01T19:48Z
            `
             */
            ModifiedTime: string;
            /**
             * 媒资删除时间。
             * @example `2020-12-01T19:48Z
            `
             */
            DeletedTime: string;
            /**
             * 雪碧图。
             * @example `[{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]`
             */
            SpriteImages: string;
            /**
             * 分类ID。
             * @example `44`
             */
            CateId: number;
            /**
             * 媒资所属业务。
             * @example `IMS`
             */
            Biz: string;
            /**
             * 上传资源。
             * @example `general`
             */
            UploadSource: string;
            /**
             * 分类名称。
             * @example `子分类1`
             */
            CateName: string;
            /**
             * 自定义ID，仅支持小写字母、大写字母、数字、横线、下划线，长度6-64位。用户维度唯一。
             * @example `123-123`
             */
            ReferenceId: string;
        };
        /**
         * FileInfos。
         */
        FileInfoList: {
            /**
             * 文件基础信息，包含时长，大小等。
             */
            FileBasicInfo: {
                /**
                 * 文件名。
                 * @example `164265080291300080527050.wav`
                 */
                FileName: string;
                /**
                 * 文件状态。
                 * @example `Normal`
                 */
                FileStatus: string;
                /**
                 * 文件类型。
                 * @example `source_file`
                 */
                FileType: string;
                /**
                 * 文件大小（字节）。
                 * @example `324784`
                 */
                FileSize: string;
                /**
                 * 文件OSS地址。
                 * @example `https://outin-d3f4681ddfd911ec99a600163e1403e7.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4`
                 */
                FileUrl: string;
                /**
                 * 文件存储区域。
                 * @example `cn-beijing`
                 */
                Region: string;
                /**
                 * 封装格式。
                 * @example `mov,mp4,m4a,3gp,3g2,mj2`
                 */
                FormatName: string;
                /**
                 * 时长。
                 * @example `60.00000
                `
                 */
                Duration: string;
                /**
                 * 码率。
                 * @example `1912.13
                `
                 */
                Bitrate: string;
                /**
                 * 宽。
                 * @example `1920`
                 */
                Width: string;
                /**
                 * 高。
                 * @example `480`
                 */
                Height: string;
                /**
                 * 创建时间。
                 * @example `2022-05-30T02:02:17Z`
                 */
                CreateTime: string;
                /**
                 * 最后修改时间。
                 * @example `2021-12-10T12:19Z`
                 */
                ModifiedTime: string;
            };
        }[];
        /**
         * AI详细信息
         */
        AiData: {
            /**
             * AI标签信息列表
             */
            AiLabelInfo: {
                /**
                 * 人脸ID
                 * @example `5FE19530C7A422197535FE74F5DB****`
                 */
                FaceId: string;
                /**
                 * 标签类型
                 * @example `物体`
                 */
                LabelType: string;
                /**
                 * 来源
                 * @example `vision`
                 */
                Source: string;
                /**
                 * 分类
                 * @example `交通工具`
                 */
                Category: string;
                /**
                 * 实体名称
                 * @example `车`
                 */
                LabelName: string;
                /**
                 * 实体ID
                 * @example `10310250338`
                 */
                LabelId: string;
                /**
                 * 片段列表
                 */
                Occurrences: {
                    /**
                     * 打分
                     * @example `0.75287705`
                     */
                    Score: number;
                    /**
                     * 最优人脸图片的base64编码
                     * @example `99C64F6287`
                     */
                    Image: string;
                    /**
                     * 向量表序列ID
                     * @example `85010D1`
                     */
                    TableBatchSeqId: string;
                    /**
                     * 片段ID
                     * @example `5FE19530C7A422197535FE74F5DB****`
                     */
                    clipId: string;
                    /**
                     * 片段起始时间
                     * @example `1.4`
                     */
                    From: number;
                    /**
                     * 片段结束时间
                     * @example `2.5`
                     */
                    To: number;
                    /**
                     * 实体的细粒度名称
                     * @example `车`
                     */
                    FinegrainName: string;
                    /**
                     * 实体的细粒度ID
                     * @example `10310250338`
                     */
                    FinegrainId: string;
                    /**
                     * 文本内容
                     * @example `皮皮`
                     */
                    Content: string;
                    /**
                     * track序列
                     */
                    Tracks: {
                        /**
                         * 人脸bbox框的面积
                         * @example `50.2`
                         */
                        Size: number;
                        /**
                         * bbox框位置坐标
                         * @example `468.0;67.0;615.0;267.0`
                         */
                        Position: string;
                        /**
                         * track的时间戳
                         * @example `1.4`
                         */
                        Timestamp: number;
                    }[];
                }[];
            }[];
            /**
             * 语音信息列表
             */
            AsrInfo: {
                /**
                 * 片段起始时间
                 * @example `1.4`
                 */
                From: number;
                /**
                 * 片段结束时间
                 * @example `2.5`
                 */
                To: number;
                /**
                 * 片段ID
                 * @example `5FE19530C7A422197535FE74F5DB****`
                 */
                ClipId: string;
                /**
                 * 文本内容
                 * @example `我是皮皮`
                 */
                Content: string;
                /**
                 * 片段时间戳
                 * @example `1.4`
                 */
                Timestamp: number;
            }[];
            /**
             * 字幕信息列表
             */
            OcrInfo: {
                /**
                 * 片段起始时间
                 * @example `1.4`
                 */
                From: number;
                /**
                 * 片段结束时间
                 * @example `2.5`
                 */
                To: number;
                /**
                 * 片段ID
                 * @example `5FE19530C7A422197535FE74F5DB****`
                 */
                ClipId: string;
                /**
                 * 文本内容
                 * @example `我是皮皮`
                 */
                Content: string;
                /**
                 * 片段时间戳
                 * @example `1.4`
                 */
                Timestamp: number;
            }[];
        };
        /**
         * AI简介数据
         */
        AiRoughData: {
            /**
             * 保存类型
             * @example `TEXT`
             */
            SaveType: string;
            /**
             * 数据状态
             * @example `SaveSuccess`
             */
            Status: string;
            /**
             * AI任务ID
             * @example `cd35b0b0025f71edbfcb472190a9****`
             */
            AiJobId: string;
            /**
             * AI结果
             * @example `http://xxxx.json`
             */
            Result: string;
            /**
             * 电视剧
             * @example `视频AI分类`
             */
            AiCategory: string;
        };
    }[];
    /**
     * 翻页标识。
     * @example `F8C4F642184DBDA5D93907A70AAE****`
     */
    ScrollToken: string;
    /**
     * 符合条件的媒资总数。
     * @example `163`
     */
    Total: number;
}
