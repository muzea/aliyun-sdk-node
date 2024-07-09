export interface UpdateLivePullStreamInfoConfigRequest {
    /**
     * 您的拉流域名为用户的主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 直播流名。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 用户的直播流所在的源站完整url。多个源站可以填多个地址，用英文分号（;）分隔。
     * @example `rtmp://guide.aliyundoc.com/liveApp****​/liveStream****;rtmp://developer.aliyundoc.com/liveApp****​/liveStream****`
     */
    "SourceUrl": string;
    /**
     * 拉流开始时间。
     * StartTime和EndTime时间间隔在7天内。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-21T08:00:00Z`
     */
    "StartTime": string;
    /**
     * 拉流结束时间。
     * StartTime和EndTime时间间隔在7天内，且EndTime超过当前时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-12-22T08:00:00Z`
     */
    "EndTime": string;
}
