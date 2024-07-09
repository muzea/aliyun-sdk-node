export interface DescribeNatGatewaysResponse {
    PageSize: number;
    RequestId: string;
    PageNumber: number;
    TotalCount: number;
    NatGateways: {
        NatGateway: {
            Status: string;
            CreationTime: string;
            VpcId: string;
            Spec: string;
            Description: string;
            NatGatewayId: string;
            BusinessStatus: string;
            Name: string;
            InstanceChargeType: string;
            RegionId: string;
            ForwardTableIds: {
                ForwardTableId: string[];
            };
            BandwidthPackageIds: {
                BandwidthPackageId: string[];
            };
        }[];
    };
}
