export interface CreateVirtualBorderRouterRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "VbrOwnerId"?: number;
    "VlanId": number;
    "CircuitCode"?: string;
    "LocalGatewayIp"?: string;
    "PeerGatewayIp"?: string;
    "PeeringSubnetMask"?: string;
    "Description"?: string;
    "Name"?: string;
    "ClientToken": string;
    "UserCidr"?: string;
}
