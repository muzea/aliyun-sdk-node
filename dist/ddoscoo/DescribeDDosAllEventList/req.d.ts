export interface DescribeDDosAllEventListRequest {
    /**
     * 要查询的DDoS攻击事件的类型。取值：
     * - **web-cc**：表示Web资源耗尽型攻击。
     * - **cc**：表示连接型攻击。
     * - **defense**：表示流量型攻击（清洗事件）。
     * - **blackhole**：表示流量型攻击（黑洞事件）。
     * 支持同时设置多个类型，多个类型间使用半角逗号（,）分隔。
     * 不设置该参数表示查询所有类型的攻击事件。
     * @example `defense`
     */
    "EventType"?: string;
    /**
     * 设置开始时间，查询在**StartTime**后发生的DDoS攻击事件。使用时间戳表示，单位：秒。
     * @example `1609430400`
     */
    "StartTime": number;
    /**
     * 设置结束时间，查询在**EndTime**前发生的DDoS攻击事件。使用时间戳表示，单位：秒。
     * @example `1640966399`
     */
    "EndTime": number;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时，设置每页包含攻击事件的数量。
     * @example `10`
     */
    "PageSize": number;
}
