interface RollbackApplicationRequest {
    "RegionId"?: string;
    "AppId": string;
    "HistoryVersion": string;
    "GroupId": string;
    "Batch"?: number;
    "BatchWaitTime"?: number;
}
export { RollbackApplicationRequest };