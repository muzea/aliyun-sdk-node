export interface DescribeBandwidthPackagesResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    BandwidthPackages: {
        BandwidthPackage: {
            Status: string;
            CreationTime: string;
            IpCount: string;
            RegionId: string;
            InstanceChargeType: string;
            BandwidthPackageId: string;
            Description: string;
            Bandwidth: string;
            NatGatewayId: string;
            ZoneId: string;
            InternetChargeType: string;
            BusinessStatus: string;
            Name: string;
            ISP: string;
            PublicIpAddresses: {
                PublicIpAddresse: {
                    IpAddress: string;
                    AllocationId: string;
                }[];
            };
        }[];
    };
}
