interface ListLabGatewaysRequest {
    "RegionId"?: string;
    "Offset": number;
    "Limit": number;
    "FuzzyGwEui"?: string;
    "FreqBandPlanGroupId"?: number;
    "FuzzyName"?: string;
    "OnlineState"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListLabGatewaysRequest };