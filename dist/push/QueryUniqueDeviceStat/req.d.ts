export interface QueryUniqueDeviceStatRequest {
    /**
     * AppKey信息。
     * @example `23267207`
     */
    "AppKey": number;
    /**
     * 查询的起始时间，ISO-8601格式，格式为 YYYY-MM-DDThh:mm:ssZ。
     * @example `2016-07-25T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询的结束时间，ISO-8601格式，格式为 YYYY-MM-DDThh:mm:ssZ。
     * @example `2016-07-26T00:00:00Z`
     */
    "EndTime": string;
    /**
     * 按天或者按月查询。可取值：
     * - DAY：天
     * - MONTH：月
     * @example `DAY`
     */
    "Granularity": string;
}
