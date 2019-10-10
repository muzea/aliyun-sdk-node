interface BindTemplateRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "InstanceType": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "TemplateId": string;
    "ApplyAll"?: boolean;
    "Replace"?: boolean;
}
export { BindTemplateRequest };