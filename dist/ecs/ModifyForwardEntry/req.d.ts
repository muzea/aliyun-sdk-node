interface ModifyForwardEntryRequest {
    "RegionId": string;
    "ForwardEntryId": string;
    "ForwardTableId": string;
    "OwnerId"?: number;
    "ExternalIp"?: string;
    "ExternalPort"?: string;
    "InternalIp"?: string;
    "InternalPort"?: string;
    "IpProtocol"?: string;
}
export { ModifyForwardEntryRequest };