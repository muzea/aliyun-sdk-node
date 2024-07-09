export interface CreateRouteEntryRequest {
    "RegionId"?: string;
    "RouteTableId": string;
    "DestinationCidrBlock": string;
    "NextHopId"?: string;
    "ClientToken"?: string;
    "NextHopType"?: string;
    "NextHopList"?: {
        NextHopId: string;
        NextHopType: string;
    }[];
}
