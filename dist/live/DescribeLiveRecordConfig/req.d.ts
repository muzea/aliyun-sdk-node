export interface DescribeLiveRecordConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 当前页码。默认值：**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页大小。默认值：**10**，取值范围：**5~30**。
     * @example `5`
     */
    "PageSize"?: number;
    /**
     * 按创建时间排序。取值：
     * - **asc**（默认值）：升序。
     * - **desc**：降序。
     * @example `asc`
     */
    "Order"?: string;
}
