export interface ListStreamingDataServicesRequest {
    /**
     * 地域Id
     * @example `cn-beijing`
     */
    "RegionId"?: string;
    /**
     * 实例ID。
     * @example `gp-bp10g78o9807yv9h3`
     */
    "DBInstanceId": string;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值如下：
     * - 30（默认值）
     * - 50
     * - 100
     * @example `50`
     */
    "PageSize"?: number;
}
