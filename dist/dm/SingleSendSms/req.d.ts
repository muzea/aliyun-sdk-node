interface SingleSendSmsRequest {
    "RegionId"?: string;
    "SignName": string;
    "TemplateCode": string;
    "RecNum": string;
    "ParamString": string;
    "OwnerId"?: number;
    "Version"?: string;
}
export { SingleSendSmsRequest };