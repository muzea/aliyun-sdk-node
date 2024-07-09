export interface UpdateEventRecordPlanRequest {
    /**
     * 智能告警事件录像计划ID。可调用[QueryEventRecordPlans](~~107907~~)查询。
     * @example `5b60bf0dd55944c19d7817442bc9****`
     */
    "PlanId": string;
    /**
     * 智能告警事件录像名称。
     * 名称长度小于48个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、英文句号（.）、英文冒号（:）。
     * @example `record1`
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
     * 预录时长，取值范围0~10，单位为秒。
     * >设备具备预录功能时，才可生成预录时长，否则，预录时长为0。
     * @example `10`
     */
    "PreRecordDuration"?: number;
    /**
     * 录像时长，包括预录时长，取值范围10~60，单位为秒。
     * @example `30`
     */
    "RecordDuration": number;
    /**
     * 时间模板ID。可调用[QueryTimeTemplate](~~107890~~)查询。
     * @example `36f06322442e4e3f85a5ae8862c9****`
     */
    "TemplateId": string;
}
