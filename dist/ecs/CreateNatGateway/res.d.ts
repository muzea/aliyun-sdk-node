export interface CreateNatGatewayResponse {
    NatGatewayId: string;
    RequestId: string;
    ForwardTableIds: {
        ForwardTableId: string[];
    };
    BandwidthPackageIds: {
        BandwidthPackageId: string[];
    };
}
