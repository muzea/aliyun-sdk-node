export interface DescribeLivePackageConfigRequest {
    /**
     * 直播域名（主播放域名）。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * App名，置空表示匹配所有名称。
     * @example `AppName`
     */
    "AppName"?: string;
    /**
     * 直播流名，置空表示匹配所有流名。
     * @example `StreamName`
     */
    "StreamName"?: string;
    /**
     * 当前页码。默认值：1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页大小。默认值：10，取值范围：5~30。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * @example `asc`
     */
    "Order"?: string;
}
