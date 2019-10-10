interface ListCommandsRequest {
    "RegionId": string;
    "ClusterId": string;
    "CommandId"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListCommandsRequest };