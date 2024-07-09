export interface DeleteTemplateRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符，且不能以ALIYUN、ACS、ALIBABA、ALICLOUD开头。
     * @example `MyTemplate`
     */
    "TemplateName": string;
    /**
     * 删除模版时，顺带删除其相关的执行。
     * @example `false`
     */
    "AutoDeleteExecutions"?: boolean;
}
