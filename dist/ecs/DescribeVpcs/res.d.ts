export interface DescribeVpcsResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    Vpcs: {
        Vpc: {
            CreationTime: string;
            VpcName: string;
            Status: string;
            VpcId: string;
            VRouterId: string;
            IsDefault: boolean;
            CidrBlock: string;
            Description: string;
            RegionId: string;
            VSwitchIds: {
                VSwitchId: string[];
            };
            UserCidrs: {
                UserCidr: string[];
            };
        }[];
    };
}
