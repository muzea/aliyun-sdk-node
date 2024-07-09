export interface DescribeVirtualBorderRoutersResponse {
    RequestId: string;
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    VirtualBorderRouterSet: {
        VirtualBorderRouterType: {
            VlanInterfaceId: string;
            Status: string;
            CreationTime: string;
            CircuitCode: string;
            PhysicalConnectionOwnerUid: string;
            LocalGatewayIp: string;
            ActivationTime: string;
            PhysicalConnectionBusinessStatus: string;
            PeeringSubnetMask: string;
            RouteTableId: string;
            Description: string;
            PhysicalConnectionStatus: string;
            RecoveryTime: string;
            TerminationTime: string;
            PeerGatewayIp: string;
            Name: string;
            AccessPointId: string;
            VbrId: string;
            PhysicalConnectionId: string;
            VlanId: number;
        }[];
    };
}
