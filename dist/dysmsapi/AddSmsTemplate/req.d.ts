interface AddSmsTemplateRequest {
    "RegionId"?: string;
    "TemplateType": number;
    "TemplateName": string;
    "TemplateContent": string;
    "Remark": string;
    "OwnerId"?: number;
}
export { AddSmsTemplateRequest };