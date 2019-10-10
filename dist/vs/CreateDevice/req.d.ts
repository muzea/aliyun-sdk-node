interface CreateDeviceRequest {
    "RegionId"?: string;
    "Type": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "GroupId": string;
    "Name"?: string;
    "Description"?: string;
    "ParentId"?: string;
    "AutoStart"?: boolean;
    "GbId"?: string;
    "Ip"?: string;
    "Port"?: number;
    "Url"?: string;
    "Username"?: string;
    "Password"?: string;
    "Vendor"?: string;
}
export { CreateDeviceRequest };