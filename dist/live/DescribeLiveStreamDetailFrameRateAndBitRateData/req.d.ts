export interface DescribeLiveStreamDetailFrameRateAndBitRateDataRequest {
    /**
     * 您的推流域名或播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `AppName`
     */
    "AppName": string;
    /**
     * 直播流名称。
     * @example `exampleStreamName`
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
