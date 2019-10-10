interface DeleteServerlessInstanceRequest {
    "RegionId": string;
    "ZoneId": string;
    "InstanceId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { DeleteServerlessInstanceRequest };