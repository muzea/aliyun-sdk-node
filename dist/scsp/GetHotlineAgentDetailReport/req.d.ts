export interface GetHotlineAgentDetailReportRequest {
    "CurrentPage"?: number;
    "PageSize"?: number;
    "StartDate": number;
    "EndDate": number;
    "InstanceId": string;
    "DepIds"?: number[];
    "GroupIds"?: number[];
}
