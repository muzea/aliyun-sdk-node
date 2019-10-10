interface ModifySmsTemplateRequest {
    "RegionId"?: string;
    "TemplateType": number;
    "TemplateName": string;
    "TemplateCode": string;
    "TemplateContent": string;
    "Remark": string;
    "OwnerId"?: number;
}
export { ModifySmsTemplateRequest };