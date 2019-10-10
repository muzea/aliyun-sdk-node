interface QueryUserOmsDataRequest {
    "RegionId"?: string;
    "Table": string;
    "DataType": string;
    "StartTime": string;
    "EndTime": string;
    "OwnerId"?: number;
    "Marker"?: string;
    "PageSize"?: number;
}
export { QueryUserOmsDataRequest };