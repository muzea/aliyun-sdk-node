interface ListExecutionPlansRequest {
    "RegionId": string;
    "ClusterId"?: string;
    "JobId"?: string;
    "Strategy"?: string;
    "StatusList"?: string[];
    "IsDesc"?: boolean;
    "PageNumber"?: number;
    "PageSize"?: number;
    "QueryType"?: string;
    "QueryString"?: string;
}
export { ListExecutionPlansRequest };