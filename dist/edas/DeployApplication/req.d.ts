interface DeployApplicationRequest {
    "RegionId"?: string;
    "AppId": string;
    "PackageVersion": string;
    "DeployType": string;
    "GroupId": string;
    "Desc"?: string;
    "WarUrl"?: string;
    "ImageUrl"?: string;
    "Batch"?: number;
    "BatchWaitTime"?: number;
    "AppEnv"?: string;
    "BuildPackId"?: number;
    "ComponentIds"?: string;
    "ReleaseType"?: number;
}
export { DeployApplicationRequest };