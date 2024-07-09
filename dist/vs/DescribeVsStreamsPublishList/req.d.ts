export interface DescribeVsStreamsPublishListRequest {
    /**
     * 您的域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `xxxApp`
     */
    "AppName"?: string;
    /**
     * 直播流名称。
     * @example `xxxStream`
     */
    "StreamName"?: string;
    /**
     * 起始时间。
     * > UTC格式。例如：2016-06-29T19:00:00Z
     * @example `2016-06-29T19:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。
     * > - UTC格式。例如：2016-06-30T19:00:00Z
     * > - EndTime和StartTime之间的间隔不能超过30天。
     * @example `2016-06-30T19:00:00Z`
     */
    "EndTime": string;
    /**
     * 每页大小。默认值：3000。
     * 取值范围：[1,3000]
     * @example `3000`
     */
    "PageSize"?: number;
    /**
     * 第几页。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 流类型。取值范围：
     * - all（所有流）（默认）
     * - raw（原始流）
     * - trans（转码流）
     * @example `all`
     */
    "StreamType"?: string;
    /**
     * 指定是否模糊匹配流名称。取值范围：
     * - fuzzy（模糊匹配）
     * - strict（精准匹配）
     * @example `fuzzy`
     */
    "QueryType"?: string;
    /**
     * 排序方式。取值范围：
     * - stream_name_desc（按直播流名称倒序）
     * - stream_name_asc（按直播流名称升序）
     * - publish_time_desc（按推流时间倒序）
     * - publish_time_asc（按推流时间升序）（默认值）
     * @example `publish_time_asc`
     */
    "OrderBy"?: string;
}
