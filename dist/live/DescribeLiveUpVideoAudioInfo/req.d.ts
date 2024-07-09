export interface DescribeLiveUpVideoAudioInfoRequest {
    /**
     * 查询的流名，需要完整填写，格式为：`rtmp://推流域名/app名/流名`
     * @example `rtmp://example.com/AppName/StreamName`
     */
    "Stream": string;
    /**
     * 起始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2015-12-10T15:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2015-12-10T15:10:00Z `
     */
    "EndTime"?: string;
}
