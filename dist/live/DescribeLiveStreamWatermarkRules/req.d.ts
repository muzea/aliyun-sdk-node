export interface DescribeLiveStreamWatermarkRulesRequest {
    /**
     * 主播流域名。
     * @example `live.yourdomain.com`
     */
    "Domain"?: string;
    /**
     * 分⻚的⻚数，不传默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分⻚每⻚个数，不传默认为100。
     * @example `100`
     */
    "PageSize"?: number;
}
