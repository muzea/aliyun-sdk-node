interface ListInvocationResultsRequest {
    "RegionId": string;
    "ClusterId": string;
    "CommandId": string;
    "InvokeRecordStatus"?: string;
    "Instance"?: string[];
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListInvocationResultsRequest };