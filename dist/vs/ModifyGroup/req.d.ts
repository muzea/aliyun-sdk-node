interface ModifyGroupRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "Id": string;
    "Name"?: string;
    "Description"?: string;
    "Region"?: string;
    "InProtocol"?: string;
    "OutProtocol"?: string;
    "Enabled"?: boolean;
    "PushDomain"?: string;
    "PlayDomain"?: string;
    "LazyPull"?: boolean;
    "Callback"?: string;
}
export { ModifyGroupRequest };