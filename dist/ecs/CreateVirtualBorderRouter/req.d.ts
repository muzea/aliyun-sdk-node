interface CreateVirtualBorderRouterRequest {
    "RegionId": string;
    "PhysicalConnectionId": string;
    "VlanId": number;
    "ClientToken"?: string;
    "VbrOwnerId"?: number;
    "CircuitCode"?: string;
    "LocalGatewayIp"?: string;
    "PeerGatewayIp"?: string;
    "PeeringSubnetMask"?: string;
    "Description"?: string;
    "Name"?: string;
    "OwnerId"?: number;
    "UserCidr"?: string;
}
export { CreateVirtualBorderRouterRequest };