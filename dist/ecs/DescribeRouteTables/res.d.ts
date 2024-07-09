export interface DescribeRouteTablesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    RouteTables: {
        RouteTable: {
            CreationTime: string;
            VRouterId: string;
            RouteTableId: string;
            ResourceGroupId: string;
            RouteTableType: string;
            RouteEntrys: {
                RouteEntry: {
                    Type: string;
                    Status: string;
                    NextHopType: string;
                    DestinationCidrBlock: string;
                    InstanceId: string;
                    RouteTableId: string;
                    NextHops: {
                        NextHop: {
                            Weight: number;
                            NextHopId: string;
                            NextHopType: string;
                            Enabled: number;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
