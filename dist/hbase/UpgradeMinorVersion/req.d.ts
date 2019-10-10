interface UpgradeMinorVersionRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ClientToken"?: string;
    "ClusterId": string;
    "ZoneId"?: string;
    "UpgradeVersion"?: string;
    "Components"?: string;
}
export { UpgradeMinorVersionRequest };