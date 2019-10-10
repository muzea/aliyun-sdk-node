interface CreateJobFileRequest {
    "RegionId"?: string;
    "RunasUser": string;
    "RunasUserPassword": string;
    "Content": string;
    "TargetFile": string;
    "ClusterId": string;
}
export { CreateJobFileRequest };