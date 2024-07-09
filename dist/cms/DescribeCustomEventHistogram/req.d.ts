export interface DescribeCustomEventHistogramRequest {
    /**
     * 事件名称。
     * @example `BucketIngressBandwidth`
     */
    "Name"?: string;
    /**
     * 事件级别。取值：
     * - CRITICAL：严重
     * - WARN：警告
     * - INFO：信息
     * @example `CRITICAL`
     */
    "Level"?: string;
    /**
     * 事件ID。
     * @example `123`
     */
    "EventId"?: string;
    /**
     * 应用分组ID。
     * @example `12345`
     */
    "GroupId"?: string;
    /**
     * 搜索事件内容包含的关键字。
     * - 如果您待搜索事件的内容中包括A和B，则可以搜索A和B。
     * - 如果您待搜索事件的内容中包括A或B，则可以搜索A或B。
     * @example `cms`
     */
    "SearchKeywords"?: string;
    /**
     * 开始时间。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1552209685596`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1552220485596`
     */
    "EndTime"?: string;
}
