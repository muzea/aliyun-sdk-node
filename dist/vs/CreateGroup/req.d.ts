interface CreateGroupRequest {
    "RegionId"?: string;
    "InProtocol": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "Name": string;
    "Description"?: string;
    "App"?: string;
    "Region"?: string;
    "OutProtocol"?: string;
    "PushDomain"?: string;
    "PlayDomain"?: string;
    "LazyPull"?: boolean;
    "Callback"?: string;
}
export { CreateGroupRequest };