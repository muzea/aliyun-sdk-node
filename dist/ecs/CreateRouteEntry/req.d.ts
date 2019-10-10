interface CreateRouteEntryRequest {
    "RegionId"?: string;
    "DestinationCidrBlock": string;
    "OwnerId"?: number;
    "RouteTableId": string;
    "NextHopId"?: string;
    "ClientToken"?: string;
    "NextHopType"?: string;
    "NextHopList"?: string[];
}
export { CreateRouteEntryRequest };