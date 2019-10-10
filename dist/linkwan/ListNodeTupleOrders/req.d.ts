interface ListNodeTupleOrdersRequest {
    "RegionId"?: string;
    "Offset": number;
    "Limit": number;
    "IsKpm"?: boolean;
    "State"?: string[];
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListNodeTupleOrdersRequest };