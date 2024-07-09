export interface DescribePhysicalConnectionsResponse {
    RequestId: string;
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    PhysicalConnectionSet: {
        PhysicalConnectionType: {
            AdLocation: string;
            CreationTime: string;
            Status: string;
            Type: string;
            PortNumber: string;
            CircuitCode: string;
            Spec: string;
            Bandwidth: number;
            Description: string;
            PortType: string;
            EnabledTime: string;
            BusinessStatus: string;
            LineOperator: string;
            Name: string;
            RedundantPhysicalConnectionId: string;
            PeerLocation: string;
            AccessPointId: string;
            PhysicalConnectionId: string;
        }[];
    };
}
