interface DescribeCenRouteMapsResponse {
    "RouteMaps": {
        "RouteMap": {
            "Status": string;
            "CenRegionId": string;
            "RouteMapId": string;
            "MapResult": string;
            "TransmitDirection": string;
            "CenId": string;
            "Priority": number;
        }[];
    };
    "PageNumber": number;
    "TotalCount": number;
    "PageSize": number;
}
export { DescribeCenRouteMapsResponse };