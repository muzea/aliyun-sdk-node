export interface CreateNatGatewayRequest {
    "RegionId": string;
    "VpcId": string;
    "Name"?: string;
    "Description"?: string;
    "ClientToken"?: string;
    "BandwidthPackage": {
        Bandwidth: number;
        Zone: string;
        IpCount: number;
    }[];
}
