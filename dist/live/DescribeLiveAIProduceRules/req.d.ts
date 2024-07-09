export interface DescribeLiveAIProduceRulesRequest {
    /**
     * 主播放域名。
     * @example `demo.aliyundoc.com`
     */
    "Domain"?: string;
    /**
     * 播流所属应用名称。
     * @example `AppName`
     */
    "App"?: string;
    /**
     * 字幕后缀。
     * > 传值为SubtitleName字幕模板名称设置的值。
     * @example `sub01`
     */
    "SuffixName"?: string;
    /**
     * 字幕规则ID。
     * @example `445409ec-7eaa-461d-8f29-4bec****`
     */
    "RulesId"?: string;
    /**
     * 分⻚的⻚数，取值范围【1,100】。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分⻚每⻚个数，取值范围【1,100】。
     * @example `100`
     */
    "PageSize"?: string;
}
