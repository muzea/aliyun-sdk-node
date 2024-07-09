export interface AddVsPullStreamInfoConfigRequest {
    /**
     * 您的加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 应用名称。
     * @example `xxxApp`
     */
    "AppName": string;
    /**
     * 流名称。
     * @example `xxxStream`
     */
    "StreamName": string;
    /**
     * 用户的直播流所在的源站。
     * > 支持多个，用英文分号（;）分隔。
     * @example `up.******.com.cn`
     */
    "SourceUrl": string;
    /**
     * 拉流开始时间。
     * > UTC时间格式，StartTime和EndTime时间间隔在7天内。
     * @example `2017-08-28T07:30:30Z`
     */
    "StartTime"?: string;
    /**
     * 拉流结束时间。
     * > UTC时间格式，StartTime和EndTime时间间隔在7天内，且EndTime必须超过当前时间。
     * @example `2017-08-28T09:30:30Z`
     */
    "EndTime"?: string;
    "Always"?: string;
}
