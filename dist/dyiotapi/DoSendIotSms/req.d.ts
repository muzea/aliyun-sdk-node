interface DoSendIotSmsRequest {
    "RegionId"?: string;
    "SignName": string;
    "TemplateCode": string;
    "PhoneNumbers": string;
    "TemplateParam": string;
    "OwnerId"?: number;
}
export { DoSendIotSmsRequest };