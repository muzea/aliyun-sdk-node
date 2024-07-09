export interface SetLiveStreamPreloadTasksRequest {
    /**
     * 播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播URL，支持批量设置多个直播URL，多个URL之间用逗号（,）分隔，不超过100个。
     * @example `rtmp://guide.aliyundoc.com/liveApp****​/liveStream****`
     */
    "PlayUrl": string;
    /**
     * 预热区域。取值：
     * - domestic：中国内地。
     * - overseas：海外及港澳台加速。
     * - global：全球加速。
     *
     * 如果不传该参数，默认的预热区域为您的域名所配置的加速区域。
     * @example `domestic`
     */
    "Area"?: string;
    /**
     * 预热开始时间，UTC格式，例如：2016-06-29T19:00:00Z，不填默认预热1小时。
     * @example `2016-06-29T19:00:00Z`
     */
    "PreloadedStartTime"?: string;
    /**
     * 预热结束时间，UTC格式，例如：2016-06-30T19:00:00Z，EndTime和StartTime之间的间隔不能超过6小时。
     * @example `2016-06-30T19:00:00Z`
     */
    "PreloadedEndTime"?: string;
}
