export interface UpdateVsPullStreamInfoConfigRequest {
    /**
     * 您的拉流域名。
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。
     * @example `xxxApp`
     */
    "AppName": string;
    /**
     * 直播流名。
     * @example `xxxStream`
     */
    "StreamName": string;
    /**
     * 用户的直播流所在的源站。
     * > 支持多个，用英文分号（;）分隔。
     * @example `up.xxx.com.cn`
     */
    "SourceUrl": string;
    /**
     * 拉流开始时间。
     * > UTC时间格式，StartTime和EndTime时间间隔在7天内。
     * @example `2021-12-10T10:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 拉流结束时间。
     * > UTC时间格式，StartTime和EndTime时间间隔在7天内，且EndTime必须超过当前时间。
     * @example `2018-12-10T18:00:00Z`
     */
    "EndTime"?: string;
    "Always"?: string;
}
