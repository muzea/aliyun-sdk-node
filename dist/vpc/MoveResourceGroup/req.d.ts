interface MoveResourceGroupRequest {
    "RegionId": string;
    "ResourceType": string;
    "NewResourceGroupId": string;
    "ResourceId": string;
    "OwnerId"?: number;
}
export { MoveResourceGroupRequest };