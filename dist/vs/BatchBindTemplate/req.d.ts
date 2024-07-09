export interface BatchBindTemplateRequest {
    /**
     * 模板ID。
     * @example `323*****998-cn-qingdao`
     */
    "TemplateId": string;
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
    /**
     * 是否强制应用到范围内的所有流，默认false。
     * @example `false`
     */
    "ApplyAll"?: boolean;
    /**
     * 是否强制替换已有绑定，默认false。
     * @example `false`
     */
    "Replace"?: boolean;
}
