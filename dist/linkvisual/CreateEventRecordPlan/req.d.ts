export interface CreateEventRecordPlanRequest {
    /**
     * 录像计划名称。
     * 名称长度小于48个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、英文句号（.）、英文冒号（:）。
     * @example `plan1`
     */
    "Name": string;
    /**
     * 智能告警事件类型：
     * - 设置为全部智能告警事件：0。
     * - 设置为多个智能告警事件：输入智能告警事件对应的序号，并用英文逗号（,）分隔，例如：`10001,10002`。
     * >设置多个智能告警事件时，单次最多支持设置10个。
     * 请在物联网平台控制台，**产品详情**页面的**功能定义**页签，查看全部智能告警事件类型。详细信息，请参考[查看智能告警事件类型](~~207701~~)。
     * @example `1`
     */
    "EventTypes"?: string;
    /**
     * 预录时长，单位为秒，默认值为0，最大值为10。
     * @example `5`
     */
    "PreRecordDuration"?: number;
    /**
     * 录像时长，单位为秒，包括预录时长，取值范围10~60。
     * @example `10`
     */
    "RecordDuration": number;
    /**
     * 时间模板ID。可调用[QueryTimeTemplate](~~107890~~)查询。
     * @example `fc82774fa749485bad7d719f9670****`
     */
    "TemplateId": string;
}
