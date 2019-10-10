interface ModifyTemplateRequest {
    "RegionId"?: string;
    "TemplateId": number;
    "TemplateName": string;
    "OwnerId"?: number;
    "TemplateSubject"?: string;
    "TemplateNickName"?: string;
    "TemplateText"?: string;
    "SmsType"?: number;
    "SmsContent"?: string;
    "Remark"?: string;
    "FromType"?: number;
}
export { ModifyTemplateRequest };