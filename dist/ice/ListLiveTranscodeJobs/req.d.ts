export interface ListLiveTranscodeJobsRequest {
    /**
     * 转码任务对应的模版类型。
     * - normal - 普通
     * - narrow-band - 窄高
     * - audio-only - 纯音频
     * - origin - 原画
     * @example `normal`
     */
    "Type"?: string;
    /**
     * 启动模式。
     * - 0 - 立即启动
     * - 1 - 定时启动
     * @example `0`
     */
    "StartMode"?: number;
    /**
     * 任务状态。
     * 0 - 未启动
     * 1 - 运行中
     * 2 - 已停止
     * @example `1`
     */
    "Status"?: number;
    /**
     * 分页的页码。默认值：1。
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
     * 搜索关键词。任务ID/名称，名称支持模糊搜索。
     * @example `24ecbb5c-4f98-4194-9400-f17102e27fc5`
     */
    "KeyWord"?: string;
}
