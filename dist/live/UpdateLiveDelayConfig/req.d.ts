export interface UpdateLiveDelayConfigRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "Domain": string;
    /**
     * 直播流所属应用名称。支持通配符*，代表该域名下所有的AppName。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 直播流流名称。支持通配符*，代表该AppName下所有的StreamName。
     * @example `liveStream****`
     */
    "Stream": string;
    /**
     * 直播流延迟播放的时长，仅支持整数。取值：15~3600。单位：秒。
     * @example `60`
     */
    "DelayTime": number;
    /**
     * 任务触发模式，取值：
     * - **PUBLISH_ONLY** ：仅支持带延播推流参数触发。
     * - **CONFIG_ONLY** ：仅支持配置触发，推流参数无效。
     * - **PUBLISH_CONFIG** ：同时支持推流和配置，并且推流参数高优于配置。
     * @example `PUBLISH_ONLY`
     */
    "TaskTriggerMode"?: string;
}
