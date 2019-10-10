interface ModifyImageGatewayConfigRequest {
    "RegionId"?: string;
    "ClusterId": string;
    "DBType"?: string;
    "DBUsername"?: string;
    "DBPassword"?: string;
    "DBServerInfo"?: string;
    "DefaultRepoLocation"?: string;
    "PullUpdateTimeout"?: number;
    "ImageExpirationTimeout"?: string;
    "Repo"?: string[];
}
export { ModifyImageGatewayConfigRequest };