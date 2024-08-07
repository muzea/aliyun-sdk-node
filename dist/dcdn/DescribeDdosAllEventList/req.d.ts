export interface DescribeDdosAllEventListRequest {
    /**
     * 开始时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2023-03-27T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 结束时间需大于起始时间。开始结束时间跨度最长不超过31天。
     * @example `2023-04-25T15:59:59Z`
     */
    "EndTime"?: string;
    /**
     * 待查询的DDoS攻击事件的类型。取值：
     * - - **web-cc**：表示Web资源耗尽型攻击。
     * - - **cc**：表示连接型攻击。
     * - - **traffic**：表示流量型攻击。
     * 不设置该参数表示查询所有类型的攻击事件。
     * @example `web-cc`
     */
    "EventType"?: string;
    /**
     * 页码，默认值为1。取值范围：1-100000。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 每页大小，默认为**10**。支持5，10，20。
     * @example `10`
     */
    "PageSize"?: number;
}
