interface SearchMediaRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "SearchType"?: string;
    "Fields"?: string;
    "Match"?: string;
    "SortBy"?: string;
    "PageNo"?: number;
    "PageSize"?: number;
    "ScrollToken"?: string;
    "SessionId"?: string;
    "ResultTypes"?: string;
}
export { SearchMediaRequest };