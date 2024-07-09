export interface SearchMediaByAILabelResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 符合要求的媒资集合
     */
    MediaList: {
        /**
         * AI详细信息。
         */
        AiData: {
            /**
             * AI标签信息列表。
             */
            AiLabelInfo: {
                /**
                 * 人脸ID。
                 * @example `5FE19530C7A422197535FE74F5DB****
                `
                 */
                FaceId: string;
                /**
                 * 标签类型。
                 * @example `物体`
                 */
                LabelType: string;
                /**
                 * 来源。
                 * @example `vision`
                 */
                Source: string;
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
                 * @example `103102503**`
                 */
                LabelId: string;
                /**
                 * 片段信息。
                 */
                Occurrences: {
                    /**
                     * 打分。
                     * @example `0.75287705
                    `
                     */
                    Score: number;
                    /**
                     * 最有人脸图片。
                     * @example `https://service-****-public.oss-cn-hangzhou.aliyuncs.com/1563457****438522/service-image/f788974f-9595-43b2-a478-7c7a1afb****.jpg`
                     */
                    Image: string;
                    /**
                     * 向量表序列ID。
                     * @example `85010D1**`
                     */
                    TableBatchSeqId: string;
                    /**
                     * 片段ID。
                     * @example `158730355E4B82257D8AA1583A58****`
                     */
                    ClipId: string;
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
                     * 实体的细粒度名称。
                     * @example `车`
                     */
                    FinegrainName: string;
                    /**
                     * 实体的细粒度ID。
                     * @example `103102503**`
                     */
                    FinegrainId: string;
                    /**
                     * 文本内容。
                     * @example `智能标签测试
                    `
                     */
                    Content: string;
                    /**
                     * track序列。
                     */
                    Tracks: {
                        /**
                         * 人脸bbox框的面积。
                         * @example `50`
                         */
                        Size: number;
                        /**
                         * bbox框位置坐标。
                         * @example `468.0;67.0;615.0;267.0`
                         */
                        Position: string;
                        /**
                         * track的时间戳。
                         * @example `1.4`
                         */
                        Timestamp: number;
                    }[];
                }[];
            }[];
            /**
             * 语音信息列表。
             */
            AsrInfo: {
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
                 * 片段ID。
                 * @example `5FE19530C7A422197535FE74F5DB****`
                 */
                ClipId: string;
                /**
                 * 文本内容。
                 * @example `智能标签测试`
                 */
                Content: string;
                /**
                 * 片段时间戳。
                 * @example `1.4`
                 */
                Timestamp: number;
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
                 * 片段ID。
                 * @example `5FE19530C7A422197535FE74F5DB****
                `
                 */
                ClipId: string;
                /**
                 * 文本内容。
                 * @example `皮皮`
                 */
                Content: string;
                /**
                 * 片段时间戳。
                 * @example `1.4`
                 */
                Timestamp: number;
            }[];
        };
        /**
         * 存储地址。
         * @example `out-****.oss-cn-shanghai.aliyuncs.com
        `
         */
        StorageLocation: string;
        /**
         * 视频状态。
         * @example `Normal`
         */
        Status: string;
        /**
         * 创建时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2017-11-14T09:15:50Z
        `
         */
        CreationTime: string;
        /**
         * 更新时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
         * @example `2017-11-14T09:15:50Z
        `
         */
        ModificationTime: string;
        /**
         * 媒资ID。
         * @example `1c6ce34007d571ed94667630a6bc****
        `
         */
        MediaId: string;
        /**
         * 标签列表。
         * @example `标签1, 标签2
        `
         */
        Tags: string;
        /**
         * 描述。
         * @example `阿里云VOD视频描述
        `
         */
        Description: string;
        /**
         * 应用ID。默认取值：app-1000000。
         * @example `app-1000000`
         */
        AppId: string;
        /**
         * 源文件大小。单位：字节。
         * @example `10897890`
         */
        Size: number;
        /**
         * 封面URL。
         * @example `http://example.aliyundoc.com/snapshot/****.jpg?auth_key=1498476426-0-0-f00b9455c49a423ce69cf4e27333****`
         */
        CoverUrl: string;
        /**
         * 时长（单位：秒）。
         * @example `12.2`
         */
        Duration: number;
        /**
         * 标题。
         * @example `史上最牛音乐播放器
        `
         */
        Title: string;
        /**
         * 视频截图URL数组。
         */
        Snapshots: string[];
    }[];
    /**
     * 符合条件的媒资总数。
     * @example `30`
     */
    Total: number;
}
