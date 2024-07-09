export interface ListLiveTranscodeTemplatesRequest {
    /**
     * 模版类型。
     * - normal - 普通
     * - narrow-band - 窄高
     * - audio-only - 纯音频
     * - origin - 原画
     * @example `normal`
     */
    "Type"?: string;
    /**
     * 视频编码。可选值：
     * - H.264
     * - H.265
     * @example `H.264`
     */
    "VideoCodec"?: string;
    /**
     * 当前页码。默认值为1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 排序，按CreateTime排序，默认是desc。
     * - asc - 正序
     * - desc - 倒序
     * @example `asc`
     */
    "SortBy"?: string;
    /**
     * 搜索关键词。模板ID/名称，名称支持模糊搜索。
     * @example `my_template`
     */
    "KeyWord"?: string;
    /**
     * 模版类别。
     * - system: 系统
     * - customized: 自定义
     * @example `customized`
     */
    "Category"?: string;
}
