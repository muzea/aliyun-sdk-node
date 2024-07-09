export interface CreateForwardEntryRequest {
    "RegionId": string;
    "ForwardTableId": string;
    "ExternalIp": string;
    "ExternalPort": string;
    "InternalIp": string;
    "InternalPort": string;
    "IpProtocol": string;
}
