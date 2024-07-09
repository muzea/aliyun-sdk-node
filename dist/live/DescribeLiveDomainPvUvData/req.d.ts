export interface DescribeLiveDomainPvUvDataRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ssZ</i>（UTC时间）。
     * @example `2018-03-17T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，需晚于起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ssZ</i>（UTC时间）。
     * @example `2018-03-20T16:00:00Z`
     */
    "EndTime"?: string;
}
