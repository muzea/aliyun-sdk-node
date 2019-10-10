interface ModifyClusterServiceConfigRequest {
    "RegionId": string;
    "ClusterId": string;
    "OwnerId"?: number;
    "ZoneId"?: string;
    "Restart"?: boolean;
    "Name"?: string;
    "Value"?: string;
    "Parameters"?: string;
}
export { ModifyClusterServiceConfigRequest };