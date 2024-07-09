export interface ListMediaBasicInfosRequest {
    /**
     * utcCreated（创建时间）的开始时间。
     * \- 为开区间（大于开始时间）。
     * \- 日期格式按照ISO8601标准表示，使用UTC时间。格式为："YYYY-MM-DD'T'hh:mm:ss'Z'"。例如：2017-01-11T12:00:00Z 表示北京时间2017年1月11日20点0分0秒。
     * @example `2020-12-20T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * utcCreated的结束时间。
     * \- 为闭区间（小于等于结束时间）。
     * \- 日期格式按照ISO8601标准表示，使用UTC时间。格式为："YYYY-MM-DD'T'hh:mm:ss'Z'"。例如：2017-01-11T12:00:00Z 表示北京时间2017年1月11日20点0分0秒。
     * @example `2020-12-20T13:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 媒资媒体类型。取值范围：
     * \- "image" 图片
     * \- "video" 视频
     * \- "audio" 音频
     * \- "text" 文字
     * @example `video`
     */
    "MediaType"?: string;
    /**
     * 媒资业务类型。取值范围：
     * \- "subtitles" 字幕
     * \- "watermark" 水印
     * \- "opening" 片头/开场
     * \- "ending" 片尾
     * \- "general" 通用
     * @example `opening`
     */
    "BusinessType"?: string;
    /**
     * 来源,
     * \- "oss" OSS存储
     * \- "vod" 视频点播
     * \- "live" 视频直播
     * \- "general" 其他来源（默认）
     * @example `oss`
     */
    "Source"?: string;
    /**
     * 资源状态。取值范围：
     * \- Init（初始状态：源文件未就绪）
     * \- Preparing（源文件准备中：比如上传中或者剪辑合成中）
     * \- PrepareFail（源文件准备失败：比如获取源文件信息失败）
     * \- Normal（正常：源文件已就绪）
     * @example `Normal`
     */
    "Status"?: string;
    /**
     * 用来表示当前调用返回读取到的位置，空代表数据已经读取完毕。
     * @example `pSa1SQ0wCe5pzVrQ6mWZEw==`
     */
    "NextToken"?: string;
    /**
     * 本次请求所返回的最大记录条数。
     * 最大值：100，默认值：10
     * @example `5`
     */
    "MaxResults"?: number;
    /**
     * 根据utcCreated排序, 默认倒序
     * \- "desc" 倒序
     * \- "asc" 正序
     * @example `desc`
     */
    "SortBy"?: string;
    /**
     * 如果为true，返回值中包含文件基础信息。
     * @example `true`
     */
    "IncludeFileBasicInfo"?: boolean;
    /**
     * 媒资ID
     * @example `****019b82e24b37a1c2958dec38****`
     */
    "MediaId"?: string;
}
