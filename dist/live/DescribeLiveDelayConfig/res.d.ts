export interface DescribeLiveDelayConfigResponse {
    /**
     * 直播流所属应用名称。
     * @example `liveApp****`
     */
    App: string;
    /**
     * 直播流延迟播放的时长。
     * @example `60`
     */
    DelayTime: string;
    /**
     * 主播流域名。
     * @example `example.com`
     */
    Domain: string;
    /**
     * 请求ID。
     * @example `A3136B58-5876-4168-83CA-B562781981A0`
     */
    RequestId: string;
    /**
     * 直播流流名称。
     * @example `liveStream****`
     */
    Stream: string;
    /**
     * 任务触发模式，取值：
     * - **PUBLISH_ONLY**：仅支持带延播推流参数触发。
     * - **CONFIG_ONLY**：仅支持配置触发，推流参数无效。
     * - **PUBLISH_CONFIG**：同时支持推流和配置，并且推流参数高优于配置。
     * @example `PUBLISH_ONLY`
     */
    TaskTriggerMode: string;
}
