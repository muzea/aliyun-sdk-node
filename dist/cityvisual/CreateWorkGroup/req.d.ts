interface CreateWorkGroupRequest {
    "RegionId"?: string;
    "Protocol": string;
    "JobNum": number;
    "InstanceId": string;
    "TheoryCutStatus"?: string;
    "Description"?: string;
    "TopicNum"?: number;
    "TopicPrefix"?: string;
    "Account"?: string;
    "Password"?: string;
    "Ip"?: string;
    "Port"?: number;
    "WorkGroupName": string;
}
export { CreateWorkGroupRequest };