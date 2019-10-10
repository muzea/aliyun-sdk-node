interface ListApmApplicationRequest {
    "RegionId": string;
    "StartTimeFrom": number;
    "StartTimeTo": number;
    "EndTimeFrom"?: number;
    "EndTimeTo"?: number;
    "ClusterId"?: string;
    "AppId"?: string;
    "State"?: string;
    "FinalStatus"?: string;
    "User"?: string;
    "Queue"?: string;
    "Name"?: string;
    "JobType"?: string;
    "OrderBy"?: string;
    "DiagnoseResult"?: string;
    "PageNumber"?: number;
    "PageSize"?: number;
}
export { ListApmApplicationRequest };