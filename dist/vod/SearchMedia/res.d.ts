export interface SearchMediaResponse {
    /**
     * 请求ID。
     * @example `3E0CEF83-FB09-4E34-BA1451814B03****`
     */
    RequestId: string;
    /**
     * 满足搜索条件的媒资信息总条数。
     * @example `10`
     */
    Total: number;
    /**
     * 翻页标识。
     * @example `24e0fba7188fae707e146esa54****`
     */
    ScrollToken: string;
    /**
     * 媒资信息列表。
     */
    MediaList: {
        /**
         * 媒体创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2018-07-19T03:45:25Z`
         */
        CreationTime: string;
        /**
         * 媒体类型。取值范围：
         * - **video**：视频。
         * - **audio**：音频。
         * - **image**：图片。
         * - **attached**：辅助媒资。
         * @example `video`
         */
        MediaType: string;
        /**
         * 媒体ID。
         * @example `a82a2cd7d4e147bbed6c1ee372****`
         */
        MediaId: string;
        /**
         * [视频信息](~~86991~~)。
         */
        Video: {
            /**
             * 状态。取值：
             * - **Uploading**：上传中。
             * - **UploadFail**：上传失败。
             * - **UploadSucc**：上传完成。
             * - **Transcoding**：转码中。
             * - **TranscodeFail**：转码失败。
             * - **Blocked**：屏蔽。
             * - **Normal**：正常。
             * @example `UploadSucc`
             */
            Status: string;
            /**
             * 视频信息创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:45:25Z`
             */
            CreationTime: string;
            /**
             * 存储区域。
             * @example `outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 分类ID。
             * @example `10000123`
             */
            CateId: number;
            /**
             * 视频标签。
             * @example `tag1`
             */
            Tags: string;
            /**
             * 视频信息更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:48:25Z`
             */
            ModificationTime: string;
            /**
             * 来源。取值：
             * - **general**：点播上传。
             * - **short_video**：短视频SDK。
             * - **editing**：剪辑合成。
             * - **live**：直播录制。
             * @example `general`
             */
            MediaSource: string;
            /**
             * 视频描述。
             * @example `视频测试`
             */
            Description: string;
            /**
             * 应用ID。
             * @example `app-****`
             */
            AppId: string;
            /**
             * 封面图片。
             * @example `https://example.aliyundoc.com/image01.png`
             */
            CoverURL: string;
            /**
             * 视频ID。
             * @example `a82a2asdasqadaf3faa0ed6c1ee372****`
             */
            VideoId: string;
            /**
             * 下载开关。只有状态开启时才允许离线下载。取值范围：
             * - **on**（开启）：初始状态，允许离线下载。
             * - **off**（禁用）：禁用离线下载。
             * @example `on`
             */
            DownloadSwitch: string;
            /**
             * 分类名称。
             * @example `video1`
             */
            CateName: string;
            /**
             * 转码模式。取值：
             * - **FastTranscode**（普通转码）：默认模式，上传完成即开始转码，且转码完成才能播放。
             * - **NoTranscode**（不转码即分发）：上传完成不转码，且立即能播放。
             * - **AsyncTranscode**（上传即分发并转码）	：上传完成即能播放，同时异步进行转码。
             * @example `FastTranscode`
             */
            TranscodeMode: string;
            /**
             * 预处理状态 。取值：
             * - **UnPreprocess**：未进行预处理。
             * - **Preprocessing**：预处理中。
             * - **PreprocessSucceed**：预处理完成。
             * - **PreprocessFailed**：预处理失败。
             * @example `Preprocessing`
             */
            PreprocessStatus: string;
            /**
             * 媒资解冻有效期。
             * @example `2023-03-30T10:14:14Z`
             */
            RestoreExpiration: string;
            /**
             * 媒资解冻状态。取值：
             * - **Processing**：解冻中。
             * - **Success**：解冻成功。
             * - **Failed**：解冻失败。
             * @example `Success`
             */
            RestoreStatus: string;
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
             * 视频大小。
             * @example `123`
             */
            Size: number;
            /**
             * 视频时长。单位：秒。
             * @example `123`
             */
            Duration: number;
            /**
             * 视频标题。
             * @example `ceshi`
             */
            Title: string;
            /**
             * 雪碧图列表。
             */
            SpriteSnapshots: string[];
            /**
             * 自动截图列表。
             */
            Snapshots: string[];
        };
        /**
         * [音频信息](~~86991~~)。
         */
        Audio: {
            /**
             * 状态。取值：
             * - **Uploading**：上传中。
             * - **Normal**：正常。
             * - **UploadFail**：失败。
             * - **Deleted**：删除。
             * @example `Normal`
             */
            Status: string;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:45:25Z`
             */
            CreationTime: string;
            /**
             * 存储区域。
             * @example `outin-aaa*****aa.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 分类ID。
             * @example `10000123`
             */
            CateId: number;
            /**
             * 标签。
             * @example `tag1,tag2`
             */
            Tags: string;
            /**
             * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:48:25Z`
             */
            ModificationTime: string;
            /**
             * 来源。取值：
             * - **general**（点播上传）：普通上传。
             * - **short_video**（短视频SDK）：	通过短视频SDK上传文件至点播，详细内容请参见[短视频SDK](~~53407~~)。
             * - **editing**（剪辑合成）：通过云剪辑合成上传文件至点播，详细内容请参见[视频合成](~~68536~~)。
             * - **live**（直播录制）：通过直播录制上传文件至点播。
             * @example `general`
             */
            MediaSource: string;
            /**
             * 描述。
             * @example `音频描述`
             */
            Description: string;
            /**
             * 应用ID。
             * @example `app-****`
             */
            AppId: string;
            /**
             * 封面图片。
             * @example `http://example.com/image04.jpg`
             */
            CoverURL: string;
            /**
             * 音频ID。
             * @example `a82a2cd7d4e147bbed6c1ee372****`
             */
            AudioId: string;
            /**
             * 下载开关。只有状态开启时才允许离线下载。取值：
             * - **on**（开启）：初始状态，允许离线下载。
             * - **off**（禁用）：禁用离线下载。
             * @example `on`
             */
            DownloadSwitch: string;
            /**
             * 分类名称。
             * @example `ceshi`
             */
            CateName: string;
            /**
             * 转码模式。取值范围：
             * - **FastTranscode**（普通转码，默认值）：上传完成即开始转码，且转码完成才能播放。
             * - **NoTranscode**（不转码即分发）：上传完成不转码，且立即能播放。
             * - **AsyncTranscode**（上传即分发并转码）：上传完成即能播放，同时异步进行转码。
             * @example `FastTranscode`
             */
            TranscodeMode: string;
            /**
             * 预处理状态，预处理完成后的视频才可用于直播导播。取值：
             * - **UnPreprocess**：未进行预处理。
             * - **Preprocessing**：预处理中。
             * - **PreprocessSucceed**：预处理完成。
             * - **PreprocessFailed**：预处理失败。
             * @example `UnPreprocess`
             */
            PreprocessStatus: string;
            /**
             * 媒资解冻有效期。
             * @example `2023-03-30T10:14:14Z`
             */
            RestoreExpiration: string;
            /**
             * 媒资解冻状态。取值：
             * - **Processing**：解冻中。
             * - **Success**：解冻成功。
             * - **Failed**：解冻失败。
             * @example `Success`
             */
            RestoreStatus: string;
            /**
             * 媒资存储类型。取值：
             * - **Standard**：标准。
             * - **IA**：媒资低频。
             * - **Archive**：媒资归档。
             * - **ColdArchive**：媒资冷归档。
             * - **SourceIA**：源文件低频。
             * - **SourceArchive**：源文件归档。
             * - **SourceColdArchive**：源文件冷归档。
             * - **Changing**：变更中。
             * @example `Standard`
             */
            StorageClass: string;
            /**
             * 大小。
             * @example `123`
             */
            Size: number;
            /**
             * 时长。
             * @example `123`
             */
            Duration: number;
            /**
             * 标题。
             * @example `音频`
             */
            Title: string;
            /**
             * 雪碧图列表。
             */
            SpriteSnapshots: string[];
            /**
             * 自动截图列表。
             */
            Snapshots: string[];
        };
        /**
         * [图片信息](~~86991~~)。
         */
        Image: {
            /**
             * 存储地域。
             * @example `outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:45:25Z`
             */
            CreationTime: string;
            /**
             * 图片状态。
             * - **Uploading**（上传中）：初始状态，表示图片正在上传。
             * - **Normal**（正常）：图片上传成功。
             * - **UploadFail**（失败）：图片上传失败。
             * @example `Uploading`
             */
            Status: string;
            /**
             * 分类ID。
             * @example `1000123`
             */
            CateId: number;
            /**
             * 标签。
             * @example `tag1`
             */
            Tags: string;
            /**
             * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:48:25Z`
             */
            ModificationTime: string;
            /**
             * 分类名称。
             * @example `美图1`
             */
            CateName: string;
            /**
             * 描述。
             * @example `图片测试`
             */
            Description: string;
            /**
             * 应用ID。
             * @example `app-****`
             */
            AppId: string;
            /**
             * 图片URL。
             * @example `https://example.com/****.png`
             */
            URL: string;
            /**
             * 标题。
             * @example `image1`
             */
            Title: string;
            /**
             * 图片ID。
             * @example `11130843741se99wqmoes****`
             */
            ImageId: string;
        };
        /**
         * [辅助媒资信息](~~86991~~)。
         */
        AttachedMedia: {
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:45:25Z`
             */
            CreationTime: string;
            /**
             * 状态。取值：
             * - **Uploading**（上传中）：	初始状态，表示辅助媒资正在上传。
             * - **Normal**（正常）：辅助媒资上传成功。
             * - **UploadFail**（失败）：辅助媒资上传失败。
             * @example `Normal`
             */
            Status: string;
            /**
             * 存储区域。
             * @example `outin-bfefbb90a47c11*****7426.oss-cn-shanghai.aliyuncs.com`
             */
            StorageLocation: string;
            /**
             * 标签。
             * @example `测试`
             */
            Tags: string;
            /**
             * 更新时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2018-07-19T03:48:25Z`
             */
            ModificationTime: string;
            /**
             * 辅助媒资ID。
             * @example `a82a2cd7d4e147ba0ed6c1ee372****`
             */
            MediaId: string;
            /**
             * 业务类型。取值：
             * - **watermark**：水印。
             * - **subtitle**：字幕。
             * - **material**：素材。
             * @example `watermark`
             */
            BusinessType: string;
            /**
             * 描述。
             * @example `测试`
             */
            Description: string;
            /**
             * 应用ID。
             * @example `app-****`
             */
            AppId: string;
            /**
             * 辅助媒资URL。
             * @example `https://example.com/****.png`
             */
            URL: string;
            /**
             * 标题。
             * @example `测试`
             */
            Title: string;
            /**
             * 分类ID列表。
             */
            Categories: {
                /**
                 * 父节点ID。
                 * @example `-1`
                 */
                ParentId: number;
                /**
                 * 分类名称。
                 * @example `测试`
                 */
                CateName: string;
                /**
                 * 分类ID。
                 * @example `10027394`
                 */
                CateId: number;
                /**
                 * 分类层级。
                 * @example `1`
                 */
                Level: number;
            }[];
        };
        /**
         * AI详细信息。
         */
        AiData: {
            /**
             * AI标签信息列表。
             */
            AiLabelInfo: {
                /**
                 * 分类。
                 * @example `交通工具`
                 */
                Category: string;
                /**
                 * 实体名称。
                 * @example `车`
                 */
                LabelName: string;
                /**
                 * 实体ID。
                 * @example `10310250338`
                 */
                LabelId: string;
                /**
                 * 片段列表。
                 */
                Occurrences: {
                    /**
                     * 打分。
                     * @example `0.75287705
                    `
                     */
                    Score: number;
                    /**
                     * 片段起始时间。
                     * @example `1.4
                    `
                     */
                    From: number;
                    /**
                     * 片段结束时间。
                     * @example `2.5`
                     */
                    To: number;
                }[];
            }[];
            /**
             * 字幕信息列表。
             */
            OcrInfo: {
                /**
                 * 片段起始时间。
                 * @example `1.4`
                 */
                From: number;
                /**
                 * 片段结束时间。
                 * @example `2.5`
                 */
                To: number;
                /**
                 * 文本内容。
                 * @example `我是皮皮
                `
                 */
                Content: string;
            }[];
        };
        /**
         * AI简介数据。
         */
        AiRoughData: {
            /**
             * 保存类型。
             * @example `TEXT
            `
             */
            SaveType: string;
            /**
             * 数据状态。
             * @example `SaveSuccess`
             */
            Status: string;
            /**
             * AI任务ID。
             * @example `cd35b0b0025f71edbfcb472190a9xxxx`
             */
            AiJobId: string;
            /**
             * 视频AI分类。
             * @example `电视剧
            `
             */
            AiCategory: string;
        };
    }[];
}
