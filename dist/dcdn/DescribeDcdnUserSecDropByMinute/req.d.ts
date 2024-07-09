export interface DescribeDcdnUserSecDropByMinuteRequest {
    /**
     * 安全功能名称。
     * @example `robot`
     */
    "SecFunc": string;
    /**
     * 触发规则。
     * @example `robot_ai`
     */
    "RuleName"?: string;
    /**
     * 触发对象。
     * @example `robot_fingerprint_ai`
     */
    "Object"?: string;
    /**
     * 域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 获取数据的起始时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如 "2006-01-02T15:04:04Z"
     * @example `2006-01-02T15:04:04Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间。日期格式按照ISO8601表示法，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如 "2006-01-02T15:05:04Z"
     * > 结束时间需大于起始时间。
     * @example `2006-01-02T15:05:04Z`
     */
    "EndTime"?: string;
    /**
     * 页面大小，最大100。
     * @example `2`
     */
    "PageSize"?: number;
    /**
     * 页面号码，从1开始。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 语言。取值：en或者zh。默认en。
     * @example `zh`
     */
    "Lang": string;
}
