interface RecoverClusterRequest {
    "RegionId": string;
    "ClusterId": string;
    "OsTag"?: string;
    "AccountType"?: string;
    "SchedulerType"?: string;
    "ImageOwnerAlias"?: string;
    "ImageId"?: string;
    "ClientVersion"?: string;
}
export { RecoverClusterRequest };