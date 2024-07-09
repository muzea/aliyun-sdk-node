export interface AddLiveStreamWatermarkRuleRequest {
    /**
     * 自定义规则名称。
     * @example `WatermarkRule****`
     */
    "Name": string;
    /**
     * 播流域名。
     * @example `example.aliyundoc.com`
     */
    "Domain": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "App": string;
    /**
     * 流名称。规则如下：
     * - 直接写流名称则仅匹配该流名称。示例：liveStreamA。
     * - 可进行模糊匹配，`*`匹配所有流。
     * - 可进行前匹配和后匹配。
     * ><notice>
     * - 模糊匹配格式说明：模糊匹配下的`*`要求有且仅有一个，只能在最前或最后，且匹配项需要`()`包围，多个匹配项用竖线`|`分隔。- 示例：`*(t1|t2) `匹配所有后缀为`t1`或`t2`的流` (abc|123)*`匹配所有前缀为`abc`或者`123`的流。
     * ></notice>
     * @example `liveStreamA`
     */
    "Stream": string;
    /**
     * 水印模板ID。
     * >可查看[AddLiveStreamWatermark](~~410759~~)接口返回参数值获取TemplateId。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "TemplateId": string;
    /**
     * 自定义规则描述信息。
     * @example `my rule`
     */
    "Description"?: string;
}
