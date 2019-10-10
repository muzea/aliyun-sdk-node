interface CreateNatGatewayRequest {
    "RegionId": string;
    "VpcId": string;
    "BandwidthPackage": string[];
    "OwnerId"?: number;
    "Name"?: string;
    "Description"?: string;
    "ClientToken"?: string;
}
export { CreateNatGatewayRequest };