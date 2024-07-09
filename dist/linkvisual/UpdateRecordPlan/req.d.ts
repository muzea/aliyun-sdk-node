export interface UpdateRecordPlanRequest {
    /**
     * 录像计划ID。可调用[QueryRecordPlans](~~107896~~)查询。
     * @example `6c5a397bc17c4b48ace86f0f0c30****`
     */
    "PlanId": string;
    /**
     * 录像计划名称。
     * 名称长度小于48个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、英文句号（.）、英文冒号（:）。
     * @example `test1`
     */
    "Name": string;
    /**
     * 录像计划要关联的时间模板ID。可调用[QueryTimeTemplate](~~107890~~)查询。
     * @example `36f06322442e4e3f85a5ae8862c9****`
     */
    "TemplateId": string;
}
