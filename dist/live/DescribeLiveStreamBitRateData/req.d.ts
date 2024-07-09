export interface DescribeLiveStreamBitRateDataRequest {
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 流的名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime"?: string;
}
