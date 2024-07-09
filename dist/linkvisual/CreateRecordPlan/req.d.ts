export interface CreateRecordPlanRequest {
    /**
     * 录像计划名称。
     * 名称长度小于48个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、英文句号（.）、英文冒号（:）。
     * @example `plan1`
     */
    "Name": string;
    /**
     * 录像计划对应的时间模板ID，可调用[CreateTimeTemplate](~~107888~~)查询。
     * @example `36f06322442e4e3f85a5ae8862c9****`
     */
    "TemplateId": string;
}
