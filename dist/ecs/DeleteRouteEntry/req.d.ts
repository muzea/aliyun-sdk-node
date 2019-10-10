interface DeleteRouteEntryRequest {
    "RegionId"?: string;
    "DestinationCidrBlock": string;
    "NextHopList"?: string[];
    "OwnerId"?: number;
    "RouteTableId": string;
    "NextHopId"?: string;
}
export { DeleteRouteEntryRequest };