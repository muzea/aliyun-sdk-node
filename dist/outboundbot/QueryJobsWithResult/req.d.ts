export interface QueryJobsWithResultRequest {
    "PageNumber"?: number;
    "PageSize"?: number;
    "JobGroupId": string;
    "QueryText"?: string;
    "JobStatusFilter"?: string;
    "HasAnsweredFilter"?: boolean;
    "HasHangUpByRejectionFilter"?: boolean;
    "HasReachedEndOfFlowFilter"?: boolean;
    "InstanceId": string;
    "TaskStatusFilter"?: string;
    "JobFailureReasonsFilter"?: string;
}
