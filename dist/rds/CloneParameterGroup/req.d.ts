interface CloneParameterGroupRequest {
    "RegionId": string;
    "TargetRegionId": string;
    "ParameterGroupId": string;
    "ParameterGroupName": string;
    "ParameterGroupDesc"?: string;
    "OwnerId"?: number;
}
export { CloneParameterGroupRequest };