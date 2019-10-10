interface AttachVServerGroupsRequest {
    "RegionId": string;
    "ScalingGroupId": string;
    "VServerGroup": string[];
    "OwnerId"?: number;
    "ForceAttach"?: boolean;
}
export { AttachVServerGroupsRequest };