export interface DeleteRouteEntryRequest {
    "RegionId"?: string;
    "RouteTableId": string;
    "DestinationCidrBlock": string;
    "NextHopId"?: string;
    "NextHopList"?: {
        NextHopId: string;
        NextHopType: string;
    }[];
}
