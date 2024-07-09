export interface GetLogsListRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 搜索传入的内容，如果为空显示全部。
     * @example `example.com`
     */
    "Domain"?: string;
    /**
     * 日志日期。
     * @example `2016-10-20`
     */
    "Date"?: string;
    /**
     * 获取日志的起始时间点。日期格式按照ISO8601表示法，并使用UTC时间。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取日志的结束时间点。日期格式按照ISO8601表示法，并使用UTC时间。
     * > 结束时间需大于起始时间。
     * @example `2016-10-20T04:01:00Z`
     */
    "EndTime"?: string;
}
