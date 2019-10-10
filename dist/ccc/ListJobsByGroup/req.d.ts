interface ListJobsByGroupRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "JobGroupId": string;
    "PageNumber": number;
    "PageSize": number;
    "JobStatus"?: string;
    "JobFailureReason"?: string;
}
export { ListJobsByGroupRequest };