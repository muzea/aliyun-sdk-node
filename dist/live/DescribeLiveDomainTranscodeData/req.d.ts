export interface DescribeLiveDomainTranscodeDataRequest {
    /**
     * 直播域名。
     * 多个域名之间用英文逗号（,）分隔。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >支持查询最近**90**天的数据。
     * @example `2018-01-01T00:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2018-01-02T01:00:00Z`
     */
    "EndTime": string;
}
