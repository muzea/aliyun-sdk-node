interface DescribeCenChildInstanceRouteEntriesResponse {
    "PageNumber": number;
    "TotalCount": number;
    "PageSize": number;
    "RequestId": string;
    "CenRouteEntries": {
        "CenRouteEntry": {
            "NextHopInstanceId": string;
            "CenRouteMapRecords": {
                "CenRouteMapRecord": {
                    "RouteMapId": string;
                    "RegionId": string;
                }[];
            };
            "OperationalMode": boolean;
            "Status": string;
            "AsPaths": {
                "AsPath": any[];
            };
            "Communities": {
                "Community": any[];
            };
            "Type": string;
            "RouteTableId": string;
            "NextHopRegionId": string;
            "NextHopType": string;
            "Conflicts": {
                "Conflict": any[];
            };
            "DestinationCidrBlock": string;
        }[];
    };
}
export { DescribeCenChildInstanceRouteEntriesResponse };