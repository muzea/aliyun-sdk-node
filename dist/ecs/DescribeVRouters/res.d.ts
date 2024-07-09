export interface DescribeVRoutersResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    VRouters: {
        VRouter: {
            VpcId: string;
            CreationTime: string;
            VRouterId: string;
            Description: string;
            VRouterName: string;
            RegionId: string;
            RouteTableIds: {
                RouteTableId: string[];
            };
        }[];
    };
}
