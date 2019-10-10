interface DeployApiRequest {
    "RegionId": string;
    "ApiId": string;
    "StageName": string;
    "Description": string;
    "GroupId"?: string;
}
export { DeployApiRequest };