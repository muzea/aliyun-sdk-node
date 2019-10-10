interface ListNodesByOwnedJoinPermissionIdRequest {
    "RegionId"?: string;
    "JoinPermissionId": string;
    "Offset": number;
    "Limit": number;
    "FuzzyDevEui"?: string;
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListNodesByOwnedJoinPermissionIdRequest };