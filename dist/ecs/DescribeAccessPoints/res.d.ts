export interface DescribeAccessPointsResponse {
    RequestId: string;
    PageNumber: number;
    PageSize: number;
    TotalCount: number;
    AccessPointSet: {
        AccessPointType: {
            Status: string;
            Type: string;
            HostOperator: string;
            Description: string;
            AttachedRegionNo: string;
            Name: string;
            AccessPointId: string;
            Location: string;
        }[];
    };
}
