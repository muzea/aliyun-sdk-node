interface QueryMediaListRequest {
    "RegionId"?: string;
    "MediaIds": string;
    "OwnerId"?: number;
    "IncludePlayList"?: boolean;
    "IncludeSnapshotList"?: boolean;
    "IncludeMediaInfo"?: boolean;
    "IncludeSummaryList"?: boolean;
}
export { QueryMediaListRequest };