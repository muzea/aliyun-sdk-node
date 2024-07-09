export interface ModifyVirtualBorderRouterAttributeRequest {
    "RegionId": string;
    "VbrId": string;
    "VlanId"?: number;
    "CircuitCode"?: string;
    "LocalGatewayIp"?: string;
    "PeerGatewayIp"?: string;
    "PeeringSubnetMask"?: string;
    "Description"?: string;
    "Name"?: string;
    "ClientToken"?: string;
    "UserCidr"?: string;
}
