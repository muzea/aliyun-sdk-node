export interface BatchUnbindTemplateRequest {
    /**
     * 模板ID，省略时解除实例上符合条件的所有绑定。
     * @example `323*****998-cn-qingdao`
     */
    "TemplateId"?: string;
    /**
     * 模板类型。取值：
     * - record（录制）
     * - snapshot（截图）
     * @example `record`
     */
    "TemplateType"?: string;
    /**
     * 实例ID，多值用逗号分隔。
     * @example `323*****994-cn-qingdao`
     */
    "InstanceId": string;
    /**
     * 实例类型。取值：
     * - group（空间）
     * - stream（流）
     * @example `group`
     */
    "InstanceType": string;
}
