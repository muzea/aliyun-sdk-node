interface ListLabNodesRequest {
    "RegionId"?: string;
    "Offset": number;
    "Limit": number;
    "FuzzyDevEui"?: string;
    "FuzzyName"?: string;
    "FreqBandPlanGroupId"?: number;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListLabNodesRequest };