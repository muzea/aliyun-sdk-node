export interface ListActionRecordsRequest {
    "InstanceId"?: string;
    "requestId"?: string;
    "userId"?: string;
    "actionNames"?: string;
    "filter"?: string;
    "page"?: number;
    "size"?: number;
    "startTime"?: number;
    "endTime"?: number;
}
