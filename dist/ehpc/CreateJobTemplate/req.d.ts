interface CreateJobTemplateRequest {
    "RegionId"?: string;
    "Name": string;
    "CommandLine": string;
    "RunasUser"?: string;
    "Priority"?: number;
    "PackagePath"?: string;
    "StdoutRedirectPath"?: string;
    "StderrRedirectPath"?: string;
    "ReRunable"?: boolean;
    "ArrayRequest"?: string;
    "Variables"?: string;
}
export { CreateJobTemplateRequest };