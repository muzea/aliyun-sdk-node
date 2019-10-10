interface AllocateInstancePrivateConnectionRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "ConnectionStringPrefix": string;
    "Port": string;
    "OwnerId"?: number;
}
export { AllocateInstancePrivateConnectionRequest };