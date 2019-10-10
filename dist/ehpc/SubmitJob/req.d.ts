interface SubmitJobRequest {
    "RegionId"?: string;
    "CommandLine": string;
    "RunasUser": string;
    "RunasUserPassword": string;
    "ClusterId": string;
    "Name"?: string;
    "Priority"?: number;
    "PackagePath"?: string;
    "StdoutRedirectPath"?: string;
    "StderrRedirectPath"?: string;
    "ReRunable"?: boolean;
    "ArrayRequest"?: string;
    "Variables"?: string;
    "InputFileUrl"?: string;
    "UnzipCmd"?: string;
    "PostCmdLine"?: string;
    "ContainerId"?: string;
    "JobQueue"?: string;
}
export { SubmitJobRequest };