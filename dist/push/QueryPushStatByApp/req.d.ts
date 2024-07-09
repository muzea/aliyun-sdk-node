export interface QueryPushStatByAppRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 查询的起始时间，ISO-8601格式，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2016-07-25T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询的结束时间，ISO-8601格式，格式为YYYY-MM-DDThh:mm:ssZ。
     * @example `2016-07-29T00:00:00Z`
     */
    "EndTime": string;
    /**
     * 返回的数据粒度，**HOUR**：是小时粒度，**DAY**：是天粒度。
     * 小时粒度允许查24小时内数据，天粒度允许查31内天数据，目前只支持天粒度查询。
     * @example `DAY`
     */
    "Granularity": string;
}
