interface CreateTemplateRequest {
    "RegionId"?: string;
    "TemplateName": string;
    "OwnerId"?: number;
    "TemplateType"?: number;
    "TemplateSubject"?: string;
    "TemplateNickName"?: string;
    "TemplateText"?: string;
    "SmsType"?: number;
    "SmsContent"?: string;
    "Remark"?: string;
    "FromType"?: number;
}
export { CreateTemplateRequest };