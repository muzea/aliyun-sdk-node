export interface BatchBindTemplatesRequest {
    /**
     * 模板ID。
     * @example `323*****998-cn-qingdao`
     */
    "TemplateId": string;
    /**
     * 模板类型。取值：
     * - record（录制）
     * - snapshot（截图）
     * @example `timeshift`
     */
    "TemplateType"?: string;
    /**
     * 实例ID。
     * @example `323*****994-cn-qingdao`
     */
    "InstanceId": string;
    /**
     * 实例类型。取值：
     * - group（空间）
     * - stream（流）
     * @example `stream`
     */
    "InstanceType": string;
    /**
     * 是否强制应用到范围内的所有流，默认false。
     * @example `false`
     */
    "ApplyAll"?: boolean;
    /**
     * 是否强制替换已有绑定，默认false。
     * @example `true`
     */
    "Replace"?: boolean;
}
