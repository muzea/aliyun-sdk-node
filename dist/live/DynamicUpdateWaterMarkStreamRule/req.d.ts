export interface DynamicUpdateWaterMarkStreamRuleRequest {
    /**
     * 主播流域名。
     * @example `pull.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 水印流名称。
     * @example `liveStream****`
     */
    "Stream": string;
    /**
     * 水印模板ID，可调用[DescribeLiveStreamWatermarks](~~414195~~)接口获取可用的水印模板ID。
     * >此参数TemplateId用于替换直播过程中的水印模板ID。
     * @example `749b7594-86d6-37b1-513b-e1e19845****`
     */
    "TemplateId": string;
}
