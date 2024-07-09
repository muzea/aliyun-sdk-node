export interface DescribeLiveStreamWatermarksRequest {
    /**
     * 主播流域名。
     * @example `live.yourdomain.com`
     */
    "Domain"?: string;
    /**
     * 搜索关键词。模板ID或名称，名称支持模糊搜索。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "KeyWord"?: string;
    /**
     * 分页的页数。不传默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每⻚模板数值，不传默认为100。
     * @example `100`
     */
    "PageSize"?: number;
}
