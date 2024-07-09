export interface DescribeLiveCenterStreamRateDataRequest {
    /**
     * 流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 推流域名。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 流的名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2024-03-05T18:00:53Z`
     */
    "StartTime": string;
    /**
     * 结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2024-03-05T18:01:03Z`
     */
    "EndTime": string;
}
