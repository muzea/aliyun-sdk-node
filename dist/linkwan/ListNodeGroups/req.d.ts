interface ListNodeGroupsRequest {
    "RegionId"?: string;
    "Offset": number;
    "Limit": number;
    "FuzzyName"?: string;
    "FuzzyJoinEui"?: string;
    "FuzzyDevEui"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListNodeGroupsRequest };