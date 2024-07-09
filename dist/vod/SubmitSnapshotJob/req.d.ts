export interface SubmitSnapshotJobRequest {
    /**
     * 视频ID。可通过以下方式获取：
     * - 通过控制台上传的视频，可登录[点播控制台](https://vod.console.aliyun.com)，选择**媒资库** > **音/视频**查看视频ID。
     * - 通过[获取视频上传地址和凭证](~~55407~~)接口获取上传地址和凭证时，视频ID为返回参数VideoId的值。
     * - 视频上传后，可通过[搜索媒体信息](~~86044~~)接口查询视频ID，为请求后返回参数VideoId的值。
     * @example `d3e680e618708efbf2cae7cc9312****`
     */
    "VideoId"?: string;
    /**
     * 截图指定时间的起始点。
     * - 单位：毫秒。
     * - 默认值：**0**。
     * @example `0`
     */
    "SpecifiedOffsetTime"?: number;
    /**
     * 截图宽，取值范围：`[8,4096]`，默认原片宽，单位：px。
     * @example `1280`
     */
    "Width"?: string;
    /**
     * 截图高，取值范围：`[8,4096]`，默认原片高，单位：px。
     * @example `720`
     */
    "Height"?: string;
    /**
     * 截图的最大数量。默认值：**1**。
     * @example `1`
     */
    "Count"?: number;
    /**
     * 截图的间隔时间，必须**大于或等于0**。
     * - 单位：秒。
     * - 默认值：**1**。
     * - Interval为**0**时，表示按照Count数根据视频时长平均截图。
     * @example `1`
     */
    "Interval"?: number;
    /**
     * 生成雪碧图的配置信息。如果不为空则生成雪碧图。参数结构详情，请参见[SpriteSnapshotConfig ](~~86952~~) 。
     * @example `{'CellWidth': 120, 'CellHeight': 68, 'Columns': 3,'Lines': 10, 'Padding': 20, 'Margin': 50}`
     */
    "SpriteSnapshotConfig"?: string;
    /**
     * 截图模板ID。
     * - 推荐先创建截图模板，再传递截图模板ID。截图模板创建详情，请参见[添加截图模板](~~99406~~)。
     * - 如果传递截图模板ID，会忽略除Action、VideoId之外的请求参数。
     * @example `f5b228fe693bf55bd87b789****`
     */
    "SnapshotTemplateId"?: string;
    /**
     * 自定义设置。仅支持JSON字符串，支持用户自定义数据透传及指定回调地址设置等。参数结构详情，请参见[UserData](~~86952~~)。
     * > 此参数中消息回调的使用前提是需要在控制台配置HTTP回调地址和勾选对应的回调事件类型才能使用，否则回调设置不生效。
     * @example `{"MessageCallback":{"CallbackURL":"http://.example.aliyundoc.com"},"Extend":{"localId":"xxx","example":"www"}}`
     */
    "UserData"?: string;
    /**
     * 指定视频时间点进行截图，单位：毫秒。一次可指定最多30个时间点。
     */
    "SpecifiedOffsetTimes"?: number[];
}
