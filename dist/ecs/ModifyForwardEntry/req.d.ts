export interface ModifyForwardEntryRequest {
    "ForwardTableId": string;
    "ForwardEntryId": string;
    "ExternalIp"?: string;
    "ExternalPort"?: string;
    "InternalIp"?: string;
    "InternalPort"?: string;
    "IpProtocol"?: string;
    "RegionId": string;
}
