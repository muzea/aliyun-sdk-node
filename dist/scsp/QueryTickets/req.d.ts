export interface QueryTicketsRequest {
    "InstanceId": string;
    "CaseId"?: number;
    "CaseType"?: number;
    "CaseStatus"?: number;
    "SrType"?: number;
    "TaskStatus"?: number;
    "ChannelId"?: string;
    "ChannelType"?: number;
    "TouchId"?: number;
    "DealId"?: number;
    "Extra"?: any;
    "AccountName"?: string;
    "MemberId"?: number;
    "ParentCaseId"?: number;
    "StartCaseGmtCreate"?: number;
    "EndCaseGmtCreate"?: number;
    "PageSize"?: number;
    "CurrentPage"?: number;
}
