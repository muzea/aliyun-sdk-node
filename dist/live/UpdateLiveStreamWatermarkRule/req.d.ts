export interface UpdateLiveStreamWatermarkRuleRequest {
    /**
     * 水印规则ID。
     * >可查看[AddLiveStreamWatermarkRule](~~410773~~)接口返回参数值获取RuleId。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "RuleId": string;
    /**
     * 自定义规则名称。
     * @example `WatermarkRule****`
     */
    "Name"?: string;
    /**
     * 自定义规则描述信息。
     * @example `my rule`
     */
    "Description"?: string;
    /**
     * 水印模板ID。
     * >可查看[AddLiveStreamWatermark](~~410759~~)接口返回参数值获取TemplateId。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9 ****`
     */
    "TemplateId"?: string;
}
