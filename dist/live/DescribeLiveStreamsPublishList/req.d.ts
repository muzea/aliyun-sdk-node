export interface DescribeLiveStreamsPublishListRequest {
    /**
     * 推流域名或主播流域名。
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
     * 推流时间。
     * 格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。EndTime和StartTime之间的间隔不能超过30天。
     * 格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
    /**
     * 分页大小。取值范围：**1~3000**，默认值为**2000**。
     * @example `1500`
     */
    "PageSize"?: number;
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 流类型。取值：
     * - **all**（默认值）：查询所有流。
     * - **raw**：查询原始流。
     * - **trans**：查询转码流。
     * @example `all`
     */
    "StreamType"?: string;
    /**
     * 指定是否模糊匹配流名称。取值：
     * - **fuzzy**（默认值）：模糊匹配。
     * - **strict**：精准匹配。
     * @example `fuzzy`
     */
    "QueryType"?: string;
    /**
     * 排序方式。取值：
     * - **stream_name_desc**：按直播流名称倒序。
     * - **stream_name_asc**：按直播流名称升序。
     * - **publish_time_desc**：按推流时间倒序。
     * - **publish_time_asc**（默认值）：按推流时间升序。
     * @example `publish_time_desc`
     */
    "OrderBy"?: string;
}
