export interface DescribeLiveSnapshotDetectPornConfigRequest {
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
     * 分页的页码。默认值：**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     *
     * 每页大小。默认值：**10**，取值范围：**5~30**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 排序。取值：
     * - **Asc**（默认值）：升序。
     * - **Desc**：降序。
     * @example `Asc`
     */
    "Order"?: string;
}
