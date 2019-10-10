interface ListFlowNodeInstanceRequest {
    "RegionId": string;
    "ProjectId"?: string;
    "StartTime"?: number;
    "StatusList"?: string[];
    "OrderBy"?: string;
    "OrderType"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListFlowNodeInstanceRequest };