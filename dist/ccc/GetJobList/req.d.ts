interface GetJobListRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "JobGroupId": string;
    "QueryAll": boolean;
    "PageNumber": number;
    "PageSize": number;
    "Status"?: number;
}
export { GetJobListRequest };