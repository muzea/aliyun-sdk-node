export interface DescribeHaVipsResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    HaVips: {
        HaVip: {
            Status: string;
            VpcId: string;
            VSwitchId: string;
            IpAddress: string;
            Description: string;
            HaVipId: string;
            CreateTime: string;
            MasterInstanceId: string;
            RegionId: string;
            AssociatedEipAddresses: {
                associatedEipAddresse: string[];
            };
            AssociatedInstances: {
                associatedInstance: string[];
            };
        }[];
    };
}
