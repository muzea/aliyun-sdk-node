export interface DeleteLiveAIProduceRulesRequest {
    /**
     * 字幕规则ID。
     * @example `445409ec-7eaa-461d -8f29-4bec2eb9****`
     */
    "RulesId"?: string;
    /**
     * 字幕后缀。
     * > 传值为SubtitleName字幕模板名称设置的值。
     * @example `et`
     */
    "SuffixName": string;
    /**
     * 主播放域名。
     * @example `demo.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 直播流应用名称。
     * @example `AppName`
     */
    "App": string;
}
