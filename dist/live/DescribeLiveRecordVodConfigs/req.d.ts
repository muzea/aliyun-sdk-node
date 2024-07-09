export interface DescribeLiveRecordVodConfigsRequest {
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
     * 分页的页码。默认值：**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页大小。默认值为**10**，取值范围：**5~100**。
     * @example `10`
     */
    "PageSize"?: number;
}
