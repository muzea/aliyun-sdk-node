export interface DescribeCustomEventAttributeRequest {
    /**
     * 事件名称。
     * @example `test123`
     */
    "Name"?: string;
    /**
     * 事件ID。
     * @example `123****`
     */
    "EventId"?: string;
    /**
     * 应用分组ID。
     * @example `123****`
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
     * @example `1552224365971`
     */
    "StartTime"?: string;
    /**
     * 结束时间。
     * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
     * @example `1552227965971`
     */
    "EndTime"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录条数。
     * @example `50`
     */
    "PageSize"?: number;
}
