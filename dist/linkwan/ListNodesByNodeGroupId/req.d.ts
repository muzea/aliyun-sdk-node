interface ListNodesByNodeGroupIdRequest {
    "RegionId"?: string;
    "NodeGroupId": string;
    "Offset": number;
    "Limit": number;
    "FuzzyDevEui"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListNodesByNodeGroupIdRequest };