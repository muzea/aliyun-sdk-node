interface ModifyFlowProjectClusterSettingRequest {
    "RegionId": string;
    "ProjectId": string;
    "ClusterId": string;
    "DefaultUser"?: string;
    "DefaultQueue"?: string;
    "UserList"?: string[];
    "QueueList"?: string[];
    "HostList"?: string[];
}
export { ModifyFlowProjectClusterSettingRequest };