export interface DescribeVirtualBorderRoutersForPhysicalConnectionResponse {
    RequestId: string;
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    VirtualBorderRouterForPhysicalConnectionSet: {
        VirtualBorderRouterForPhysicalConnectionType: {
            CreationTime: string;
            CircuitCode: string;
            RecoveryTime: string;
            TerminationTime: string;
            ActivationTime: string;
            VbrOwnerUid: number;
            VbrId: string;
            VlanId: number;
        }[];
    };
}
