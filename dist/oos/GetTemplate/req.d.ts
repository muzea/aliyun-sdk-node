export interface GetTemplateRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 模板名称。内容限制为字母、数字、中划线、下划线，长度200字符。
     * @example `MyTemplate`
     */
    "TemplateName": string;
    /**
     * 模板版本。格式：**“v”+数字**。取值范围：**v1-v200**。
     * @example `v1`
     */
    "TemplateVersion"?: string;
}
