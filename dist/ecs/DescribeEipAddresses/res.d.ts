export interface DescribeEipAddressesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    EipAddresses: {
        EipAddress: {
            Status: string;
            AllocationTime: string;
            ChargeType: string;
            InstanceId: string;
            InstanceType: string;
            RegionId: string;
            IpAddress: string;
            Bandwidth: string;
            ExpiredTime: string;
            AllocationId: string;
            InternetChargeType: string;
            EipBandwidth: string;
            OperationLocks: {
                LockReason: {
                    LockReason: string;
                }[];
            };
        }[];
    };
}
