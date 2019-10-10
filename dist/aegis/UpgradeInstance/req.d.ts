interface UpgradeInstanceRequest {
    "RegionId"?: string;
    "ClientToken": string;
    "InstanceId": string;
    "VersionCode": number;
    "VmNumber": number;
    "OwnerId"?: number;
}
export { UpgradeInstanceRequest };