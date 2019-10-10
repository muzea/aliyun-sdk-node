interface EditJobTemplateRequest {
    "RegionId"?: string;
    "CommandLine": string;
    "Name": string;
    "TemplateId": string;
    "RunasUser"?: string;
    "Priority"?: number;
    "PackagePath"?: string;
    "StdoutRedirectPath"?: string;
    "StderrRedirectPath"?: string;
    "ReRunable"?: boolean;
    "ArrayRequest"?: string;
    "Variables"?: string;
}
export { EditJobTemplateRequest };