export interface ListLiveDelayConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页大小。取值范围：5~30，默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
