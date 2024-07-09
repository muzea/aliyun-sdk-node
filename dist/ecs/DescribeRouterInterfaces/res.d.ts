export interface DescribeRouterInterfacesResponse {
    RequestId: string;
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    RouterInterfaceSet: {
        RouterInterfaceType: {
            HealthCheckTargetIp: string;
            CreationTime: string;
            Status: string;
            Spec: string;
            OppositeInterfaceId: string;
            RouterInterfaceId: string;
            ChargeType: string;
            OppositeRouterType: string;
            OppositeInterfaceOwnerId: string;
            Description: string;
            Name: string;
            OppositeRouterId: string;
            OppositeInterfaceSpec: string;
            RouterId: string;
            OppositeInterfaceBusinessStatus: string;
            ConnectedTime: string;
            OppositeInterfaceStatus: string;
            HealthCheckSourceIp: string;
            EndTime: string;
            OppositeRegionId: string;
            OppositeAccessPointId: string;
            BusinessStatus: string;
            Role: string;
            RouterType: string;
            AccessPointId: string;
        }[];
    };
}
