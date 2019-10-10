interface ListGatewayTupleOrdersRequest {
    "RegionId"?: string;
    "Offset": number;
    "Limit": number;
    "State"?: string[];
    "SortingField"?: string;
    "Ascending"?: boolean;
}
export { ListGatewayTupleOrdersRequest };