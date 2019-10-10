interface CreateParameterGroupRequest {
    "RegionId": string;
    "ParameterGroupName": string;
    "Engine": string;
    "EngineVersion": string;
    "Parameters": string;
    "OwnerId"?: number;
    "ParameterGroupDesc"?: string;
}
export { CreateParameterGroupRequest };