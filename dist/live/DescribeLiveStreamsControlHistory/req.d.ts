export interface DescribeLiveStreamsControlHistoryRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 查询开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 查询结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * EndTime和StartTime之间的间隔不能超过7天。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
}
