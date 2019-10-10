interface ModifyResourceGroupRequest {
    "RegionId"?: string;
    "DBInstanceId": string;
    "ResourceGroupId": string;
    "OwnerId"?: number;
    "ClientToken"?: string;
}
export { ModifyResourceGroupRequest };